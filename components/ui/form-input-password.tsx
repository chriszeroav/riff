"use client";

import { FC, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import {
  Button,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/shadcn";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { nanoid } from "nanoid";

interface FormInputPasswordProps extends ControllerRenderProps {
  label: string;
  showGeneratePassword?: boolean;
}

export const FormInputPassword: FC<FormInputPasswordProps> = ({
  label,
  showGeneratePassword,
  ...field
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const generatePassword = () => {
    const newPassword = nanoid(12);
    field.onChange(newPassword);
  };

  return (
    <FormItem>
      <div className="flex items-center justify-between">
        <FormLabel>Contraseña</FormLabel>
        <FormMessage />
      </div>
      <div className="relative">
        <FormControl>
          <Input
            type={isVisible ? "text" : "password"}
            placeholder="********"
            {...field}
          />
        </FormControl>
        <Button
          className="absolute top-1/2 -translate-y-1/2 right-3"
          type="button"
          onClick={handleClick}
          variant="none"
          size="none"
        >
          {isVisible ? (
            <EyeOffIcon className="size-5 text-neutral-500" />
          ) : (
            <EyeIcon className="size-5 text-neutral-500" />
          )}
        </Button>
      </div>
      {showGeneratePassword && (
        <Button
          onClick={generatePassword}
          type="button"
          size="none"
          variant="link"
          className="text-xs w-fit ml-auto"
        >
          Generar contraseña
        </Button>
      )}
    </FormItem>
  );
};
