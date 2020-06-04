// import { VIEW } from "./view/viewActionTypes";
import { OPEN_DRAWER } from "./openDrawer/openDrawerActionTypes";
import openDrawerReducer from "./openDrawer/openDrawerReducer";
// import { viewReducer } from "./view/viewReducer";
// import { combineReducers } from "redux";
// import { rootReducer } from "./rootReducer";
// import { openDrawer } from "./openDrawer/openDrawerActions"

describe("Reducer", () => {
  describe("open drawer reducer", () => {
    it("Should return default state", () => {
      const newState = openDrawerReducer(undefined, {});
      expect(newState.open).toEqual(true);
    });

    it("Should return new state if receiving action", () => {
      let state = {
        open: false,
      };
      const newState = openDrawerReducer(state, OPEN_DRAWER);
      expect(newState.open).toEqual(false);
    });
  });
});
