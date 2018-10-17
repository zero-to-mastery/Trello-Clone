import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("Main App component", () => {
  test("Should render without crash", () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper).toHaveLength(1);
    expect(AppWrapper.exists()).toBeTruthy();
  });
});
