import { useStoryStore } from "~/stores/useStoryStore";
import type { Story } from "~/types/types";

export default () => {
    const store = useStoryStore()
    const client = useStoryClient()
    
    async function get(id: string) {
      if (!id) {
        throw new Error("id is required");
      }
      const story = store.stories.find((s) => s.id === id)
      if(!story){
        const story = await client.get(id)
        store.add(story)
      }
     
      return store.stories
    }

  async function getAll(ids: Array<string> = []) : Promise<Array<Story>>{
    const stories = await client.getAll(ids)
    store.stories = stories
    return store.stories
  }

  return {
    get,
    getAll,
    stories:computed(() => store.stories)
  };
};
