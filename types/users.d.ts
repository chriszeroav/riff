import { UserRole } from "@prisma/client";

export interface UserEntity {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  status: UserStatus;
  createdAt: string;
}

export interface AddUserFormValues {
  name?: string;
  email: string;
  password: string;
}
