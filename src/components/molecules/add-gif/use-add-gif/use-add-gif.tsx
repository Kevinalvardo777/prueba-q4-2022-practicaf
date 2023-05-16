import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Gif } from "../../../../interfaces/gif";
import {
  axiosController,
  createGif,
  gifApiEndpoints,
} from "../../../../api/gif-api";

export const useAddGif = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const urlRegex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const { isLoading, error, data, isFetching, refetch, remove } = useQuery(
    ["addGif", inputValue],
    () => createGif({ url: inputValue }),
    {
      refetchOnWindowFocus: false,
      enabled: false, // no se ejecuta por defecto
    }
  );

  useEffect(() => {
    if (error) setErrorMessage("No fue posible agregar el gif");
    return () => remove();
  }, [error]);

  useEffect(() => {
    if (data) {
      console.log("limpiar campo");
      setInputValue("");
    }

    return () => remove();
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
    isLoading: isFetching || isFetching,
  };
};
