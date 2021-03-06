import { createStore } from "redux";
import openDrawer from "../../redux/openDrawer/openDrawerActions";
import View from "../../redux/view/viewActions";
import rootReducer from "../../redux/rootReducer";

describe("store", () => {
  test("Store is updated correctly for open drawer", () => {
    const expectedState = {
      openDrawer: {
        open: false,
      },
      view: {
        view: false,
      },
    };
    const store = createStore(rootReducer);
    store.subscribe(function () {
      expect(store.getState()).toEqual(expectedState);
    });
    // Some async dispatch
    store.dispatch(openDrawer());
  });

  test("Store is updated correctly for view", () => {
    const expectedState = {
      openDrawer: {
        open: true,
      },
      view: {
        view: true,
      },
    };
    const store = createStore(rootReducer);
    store.subscribe(function () {
      expect(store.getState()).toEqual(expectedState);
    });
    // Some async dispatch
    store.dispatch(View());
  });
});
