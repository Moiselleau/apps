import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isDefaultProfilePhoto?: SortOrder;
  photoUrl?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
