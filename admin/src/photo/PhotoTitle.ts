import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "photoUrl";

export const PhotoTitle = (record: TPhoto): string => {
  return record.photoUrl?.toString() || String(record.id);
};
