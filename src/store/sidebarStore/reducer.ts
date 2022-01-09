import React from "react";

const initialState = {
  isOpen: false,
};

interface ActionType {
  type: string;
  payload: {
    isOpen: boolean;
    sidebarPosition: string;
    sidebarContent: React.ReactNode | null;
  };
}

export const sidebarReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      if (!state.isOpen) {
        return { ...state, ...action.payload, isOpen: true };
      } else {
        return { isOpen: false };
      }
    case "CLOSE_SIDEBAR":
      return { isOpen: false };
    default:
      return state;
  }
};
