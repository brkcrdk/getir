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
    case "OPEN_SIDEBAR":
      return { ...action.payload, isOpen: true };
    case "CLOSE_SIDEBAR":
      return { isOpen: false };
    default:
      return state;
  }
};
