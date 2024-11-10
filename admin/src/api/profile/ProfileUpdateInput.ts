import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileUpdateInput = {
  bio?: string | null;
  phoneNumber?: string | null;
  profilePhoto?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
