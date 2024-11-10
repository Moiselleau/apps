import { User } from "../user/User";

export type Photo = {
  createdAt: Date;
  id: string;
  isDefaultProfilePhoto: boolean | null;
  photoUrl: string | null;
  updatedAt: Date;
  user?: User | null;
};
