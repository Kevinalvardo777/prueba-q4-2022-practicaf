import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { deleteGif } from "../../../../services/gif-service/gif-service";

  interface UseGifCardProps {
    id: number, 
    url: string, 
    refetchGifs: () => void
  }

export const useGifCard = ({id, url, refetchGifs}: UseGifCardProps) => {
  const [showDeleteOptions, setShowDeleteOptions] = useState(false);

  const handleToggleDeleteOptions = () => {
    setShowDeleteOptions((oldValue) => !oldValue);
  };

  const { isLoading, error, data, isFetching, refetch, remove } = useQuery(
    ["deleteGif", id, url],
    () => deleteGif({ id, url }),
    { enabled: false, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (data) {
      refetchGifs();
    }
    return remove();
  }, [data]);

  const handleDelete = () => refetch()
  

  return { showDeleteOptions, handleDelete, handleToggleDeleteOptions, isLoading: isFetching || isLoading, error};
};
