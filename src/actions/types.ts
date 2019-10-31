import { UserType } from "../types/user";

// Action untuk UserType
/* 
  List definisi aksi yang dapat dilakukan untuk melakukan manipulasi user
*/
export const USER_CREATE: string = "USER_CREATE";
export const USER_UPDATE: string = "USER_UPDATE";
export const USER_REMOVE: string = "USER_REMOVE";
export const USER_FETCH: string = "USER_FETCH";
export const USER_SELECT: string = "USER_SELECT";

// Interface createUserAction
/* 
  Definisi tipe aksi dan juga payload yang digunakan untuk membuat pengguna
*/
export interface createUserTypes {
  type: typeof USER_CREATE;
  payload: UserType;
  meta?: {
    info: string;
  };
}

export interface updateUserTypes {
  type: typeof USER_UPDATE;
  payload: UserType;
}
