import { FC } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn";
import { AddUser as AddUserForm } from "@/forms/users";

interface AddUserProps {}

export const AddUser: FC<AddUserProps> = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nuevo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear usuario</DialogTitle>
          <DialogDescription>
            Complete el siguiente formulario para crear un nuevo usuario.
          </DialogDescription>
        </DialogHeader>
        <AddUserForm />
      </DialogContent>
    </Dialog>
  );
};
