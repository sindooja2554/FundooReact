import { OPEN_DRAWER } from "../../redux/openDrawer/openDrawerActionTypes";
import openDrawerReducer from "../../redux/openDrawer/openDrawerReducer";

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
