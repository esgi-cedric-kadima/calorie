import HomeView from "./HomeView.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

describe("HomeView.vue", () => {
  it("fetches aliments and updates the list", async () => {
    const mock = new MockAdapter(axios);
    const mockResponse = {
      foods: [
        { id: 1, name: "Aliment 1" },
        { id: 2, name: "Aliment 2" },
        { id: 3, name: "Aliment 3" }
      ]
    };
    mock.onGet("https://api.nal.usda.gov/fdc/v1/foods/search").reply(200, mockResponse);
    const wrapper = shallowMount(HomeView);
    await wrapper.vm.fetchAliments();
    expect(wrapper.vm.aliments).toEqual(mockResponse.foods);
  });
});
