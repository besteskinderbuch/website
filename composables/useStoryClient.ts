
import type { Story } from "../types/types";

export default () => {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl

  async function get(id: string): Promise<Story> {
    if (!id) {
      throw new Error("id is required");
    }

    const result = await $fetch<Story>(`${siteUrl}/api/stories`, {
      query: {
        id,
      },
    });

    return result;
  }

  async function getAll(ids: Array<string> = []) : Promise<Array<Story>>{
    const result = await $fetch<Array<Story>>(`${siteUrl}/api/stories`, {
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
