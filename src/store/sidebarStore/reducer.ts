import { SidebarTypes, actionTypes } from "types";

const initialState = {
  isOpen: false,
  sidebarPosition: "left",
  sidebarContent: null,
};

interface ActionType {
  type: string;
  payload: SidebarTypes;
}

export const sidebarReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionTypes.sidebarStore.OPEN_SIDEBAR:
      const newState = {
        isOpen: true,
        sidebarPosition: action.payload.sidebarPosition || "left",
        sidebarContent: action.payload.sidebarContent,
      };
      return newState;
    case actionTypes.sidebarStore.CLOSE_SIDEBAR:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
