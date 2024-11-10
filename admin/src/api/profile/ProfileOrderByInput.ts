import { SortOrder } from "../../util/SortOrder";

export type ProfileOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  profilePhoto?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
