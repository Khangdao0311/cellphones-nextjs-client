interface IState {
  search: string;
  location: ILocation;
  modal: IModal;
}

interface IAction {
  type: string;
  payload: any;
}

interface ILocation {
  id: number;
  name: string;
}

interface IModal {
  menu: boolean;
  location: boolean;
  search: boolean;
  login: boolean;
  noti: boolean;
}
