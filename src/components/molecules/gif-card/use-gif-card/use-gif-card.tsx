import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { deleteGif } from "../../../../services/gif-service/gif-service";

  interface UseGifCardProps {
    id: number, 
    url: string, 
    refetchGifs: () => void
    displayAlert: (message: string, type: 'success' | 'error') => void

  }

export const useGifCard = ({id, url, displayAlert, refetchGifs}: UseGifCardProps) => {
  const [showDeleteOptions, setShowDeleteOptions] = useState(false);

  const handleToggleDeleteOptions = () => {
    setShowDeleteOptions((oldValue) => !oldValue);
  };

  const { error, data, isFetching, refetch, remove } = useQuery(
    ["deleteGif", id, url],
    () => deleteGif({ id, url }),
    { enabled: false, refetchOnWindowFocus: false }
  );

  useEffect(() => {
    if (data) {
      displayAlert("eliminado exitosamente", "success")
      refetchGifs();
    }
    return remove();
  }, [data]);

  const handleDelete = () => refetch()
  

  return { showDeleteOptions, handleDelete, handleToggleDeleteOptions, isLoading: isFetching, error};
};
