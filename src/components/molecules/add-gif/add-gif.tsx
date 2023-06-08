import { Input } from "../../atoms/input/input";
import { Button } from "../../atoms/button/button";
import { useAddGif } from "./use-add-gif/use-add-gif";
import "./add-gif.scss";
import { FC, PropsWithChildren } from "react";
import { Gif } from "../../../utils/interfaces/gif";

interface AddGifProps extends PropsWithChildren {
  refetch: () => void;
  displayAlert: (message: string, type: 'success' | 'error') => void
}

export const AddGif: FC<AddGifProps> = ({ refetch: refetchGifs, displayAlert }) => {
  const { onChange, handleSubmit, inputValue, errorMessage, isLoading,  } = useAddGif({
    refetchGifs, displayAlert
  });

  return (
    <div className="add-gif add-gif__wrapper">
      <h2 className="add-gif add-gif__wrapper__title">Gif Gallery</h2>
      <section className="add-gif add-gif__wrapper__add">
        <Input
          value={inputValue}
          errorMessage={errorMessage}
          onChange={onChange}
          placeholder="Gift URL"
        />
        <Button onClick={handleSubmit} loading={isLoading}>Agregar</Button>
      </section>
    </div>
  );
};
