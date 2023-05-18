import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { createGif } from "../../../../services/gif-service/gif-service";

interface useAddGifProps {
  refetchGifs: () => void;
}

export const useAddGif = ({ refetchGifs }: useAddGifProps) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const urlRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const { isLoading, error, data, isFetching, refetch, remove } = useQuery(
    ["addGif", inputValue],
    () => createGif({ url: inputValue }),
    { enabled: false, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (error) setErrorMessage("No fue posible agregar el gif");
    return remove();
  }, [error]);

  useEffect(() => {
    if (data) {
      setInputValue("");
      refetchGifs();
    }
    return remove();
  }, [data]);

  const handleSubmit = async () => {
    if (!urlRegex.test(inputValue))
      return setErrorMessage("Por favor ingrese una url válida");

    refetch();
  };

  const onChange = (value: string) => {
    setInputValue(value);
  };

  return {
    onChange,
    handleSubmit,
    inputValue,
    errorMessage,
    isLoading: isFetching || isLoading,
  };
};
