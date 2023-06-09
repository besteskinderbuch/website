import { defineStore } from "pinia";
import type { Story } from "../types/types";

export const useStoryStore = defineStore("stories", () => {
  const initialized = ref(false);

  const stories = ref<Array<Story>>([]);

  function add(story: Story | Array<Story>) {
    if (Array.isArray(story)) {
      stories.value = [...stories.value, ...story];
    } else {
      stories.value = [...stories.value, story];
    }
  }

  return {
    initialized,
    stories,
    add,
  };
});
