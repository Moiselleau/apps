import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  id?: StringFilter;
  isDefaultProfilePhoto?: BooleanNullableFilter;
  photoUrl?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
