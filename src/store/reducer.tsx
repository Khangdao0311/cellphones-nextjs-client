import {
  SET_MODAL_MENU,
  SET_MODAL_LOGIN,
  SET_MODAL_NOTI,
  SET_MODAL_SEARCH,
  SET_VALUE_SEARCH,
  SET_VALUE_LOCATION,
  SET_MODAL_LOCATION,
} from "./constants";

const initState: IState = {
  search: "",
  location: {
    id: 1,
    name: "Hồ Chí Minh",
  },
  modal: {
    menu: false,
    location: false,
    search: false,
    login: false,
    noti: false,
  },
};

function reduce(state: IState, action: IAction) {
  switch (action.type) {
    case SET_VALUE_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_VALUE_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_MODAL_MENU:
      return {
        ...state,
        modal: {
          ...state.modal,
          menu: action.payload,
        },
      };
    case SET_MODAL_LOCATION:
      return {
        ...state,
        modal: {
          ...state.modal,
          location: action.payload,
        },
      };
    case SET_MODAL_SEARCH:
      return {
        ...state,
        modal: {
          ...state.modal,
          search: action.payload,
        },
      };
    case SET_MODAL_LOGIN:
      return {
        ...state,
        modal: {
          ...state.modal,
          login: action.payload,
        },
      };
    case SET_MODAL_NOTI:
      return {
        ...state,
        modal: {
          ...state.modal,
          noti: action.payload,
        },
      };
    default:
      break;
  }
}

export { initState };
export default reduce;
