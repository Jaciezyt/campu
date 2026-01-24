import { defineStore } from "pinia";

export const useStateStore = defineStore("state", {
  state: () => ({
    navBarPinned: false,
    hitokoto: {
      hitokoto: "合抱之木，生于毫末；九层之台，起于累土；千里之行，始于足下。",
      from: "《老子》",
    }
  }),
  actions: {
    updateHitokoto(newHitokoto: string, newFrom: string) {
      this.hitokoto.hitokoto = newHitokoto;
      this.hitokoto.from = newFrom;
    },
    pinNavBar() {
      this.navBarPinned = true;
    },
    unpinNavBar() {
      this.navBarPinned = false;
    }
  },
});
