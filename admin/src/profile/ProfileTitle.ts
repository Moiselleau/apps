import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "phoneNumber";

export const ProfileTitle = (record: TProfile): string => {
  return record.phoneNumber?.toString() || String(record.id);
};
