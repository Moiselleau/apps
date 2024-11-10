import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  bio?: string | null;
  phoneNumber?: string | null;
  profilePhoto?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
