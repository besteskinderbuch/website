
import type { Article } from "../types/types";

export default () => {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl

  async function get(id: string): Promise<Article> {
    if (!id) {
      throw new Error("id is required");
    }

    const result = await $fetch<Article>(`${siteUrl}/api/articles`, {
      query: {
        id,
      },
    });

    return result;
  }

  async function getAll(ids: Array<string> = []) : Promise<Array<Article>>{
    const result = await $fetch<Array<Article>>(`${siteUrl}/api/articles`, {
      query: {
        ids,
      },
    });

    return result;
  }

  return {
    get,
    getAll,
  };
};
