import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoUpdateInput = {
  isDefaultProfilePhoto?: boolean | null;
  photoUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
