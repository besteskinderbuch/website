import { useArticleStore } from "~/stores/useArticleStore";
import type { Article } from "~/types/types";

export default () => {
  const store = useArticleStore();
  const client = useArticleClient();

  async function get(id: string) {
    if (!id) {
      throw new Error("id is required");
    }

    const story = store.articles.find((s) => s.id === id);
    if (!story) {
      const story = await client.get(id);
      store.add(story);
    }

    return store.articles;
  }

  async function getAll(ids: Array<string> = []): Promise<Array<Article>> {
    if (!store.initialized) {
      const articles = await client.getAll(ids);
      store.articles = articles;
      store.initialized = true;
    }
    return store.articles;
  }

  return {
    get,
    getAll,
    articles: computed(() => store.articles),
    previewArticles: computed(() => store.previewArticles),
  };
};
