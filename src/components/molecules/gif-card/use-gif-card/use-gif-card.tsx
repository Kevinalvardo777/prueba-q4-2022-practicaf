import { useState } from "react";

export const useGifCard = () => {
  const [showDeleteOptions, setShowDeleteOptions] = useState(false);

  const handleToggleDeleteOptions = () => {
    setShowDeleteOptions((oldValue) => !oldValue);
  };

  const handleDelete = () => {
    // TODO: EJECUTAR PETICION ELIMINAR
    // console.log("ELIMINAR")
  };

  return { showDeleteOptions, handleDelete, handleToggleDeleteOptions };
};
