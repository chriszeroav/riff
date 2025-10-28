"use client";

import { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/shadcn";
import { createUserSchema } from "@/schemas/users";
import { AddUserFormValues } from "@/types/users";
import { FormInputPassword } from "@/components/ui";
import { useCreateUser } from "@/hooks/users";
import { toast } from "sonner";

interface AddUserProps {}

export const AddUser: FC<AddUserProps> = () => {
  const [createUser, loading] = useCreateUser();

  const form = useForm<AddUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: AddUserFormValues) {
    toast.promise(createUser(values), {
      loading: "Creando usuario...",
      success: (data) => {
        form.reset();
        return data;
      },
      error: (err) => err.message,
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Nombre:</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="ejemplo" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Correo:</FormLabel>
                <FormMessage />
              </div>
              <FormControl>
                <Input placeholder="ejemplo@correo.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormInputPassword
              showGeneratePassword
              label="Contraseña"
              {...field}
            />
          )}
        />
        <Button disabled={loading} type="submit">
          {loading ? "Creando..." : "Crear"}
        </Button>
      </form>
    </Form>
  );
};
