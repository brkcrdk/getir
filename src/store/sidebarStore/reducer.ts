import { SidebarTypes } from "types";

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
    case "OPEN_SIDEBAR":
      const newState = {
        isOpen: true,
        sidebarPosition: action.payload.sidebarPosition || "left",
        sidebarContent: action.payload.sidebarContent,
      };
      return newState;
    case "CLOSE_SIDEBAR":
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};
