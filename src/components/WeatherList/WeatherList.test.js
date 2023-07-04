import React from "react";
import { shallow } from "enzyme";
import WaetherList from "./WeatherList";

describe("WeatherList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WeatherList />);
    expect(wrapper).toMatchSnapshot();
  });
});
