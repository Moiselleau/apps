import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  isDefaultProfilePhoto?: boolean | null;
  photoUrl?: string | null;
  user?: UserWhereUniqueInput | null;
};
