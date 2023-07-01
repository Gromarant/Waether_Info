import React from "react";
import { shallow } from "enzyme";
import WaetherList from "./WaetherList";

describe("WaetherList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WaetherList />);
    expect(wrapper).toMatchSnapshot();
  });
});
