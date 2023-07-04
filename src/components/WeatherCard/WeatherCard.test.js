import React from "react";
import { shallow } from "enzyme";
import WaetherCard from "./WeatherCard.test";

describe("WaetherCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<WaetherCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
