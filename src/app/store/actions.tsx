import {
  SET_MODAL_MENU,
  SET_MODAL_LOGIN,
  SET_MODAL_NOTI,
  SET_MODAL_SEARCH,
  SET_VALUE_SEARCH,
  SET_VALUE_LOCATION,
  SET_MODAL_LOCATION,
} from "./constants";

export const setValueSearch = (payload: string) => ({
  type: SET_VALUE_SEARCH,
  payload,
});

export const setValueLocation = (payload: ILocation) => ({
  type: SET_VALUE_LOCATION,
  payload,
});

export const setModalMenu = (payload: boolean) => ({
  type: SET_MODAL_MENU,
  payload,
});

export const setModalLocation = (payload: boolean) => ({
  type: SET_MODAL_LOCATION,
  payload,
});

export const setModalSearch = (payload: boolean) => ({
  type: SET_MODAL_SEARCH,
  payload,
});

export const setModalLogin = (payload: boolean) => ({
  type: SET_MODAL_LOGIN,
  payload,
});

export const setModalNoti = (payload: boolean) => ({
  type: SET_MODAL_NOTI,
  payload,
});
