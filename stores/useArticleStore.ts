import { defineStore } from "pinia";

import type { Article } from "../types/types";

export const useArticleStore = defineStore("articles", () => {
  const initialized = ref(false);

  const articles = ref<Array<Article>>([]);

  function add(article: Article | Array<Article>) {
    if (Array.isArray(article)) {
      articles.value = [...articles.value, ...article];
    } else {
      articles.value = [...articles.value, article];
    }
  }

  const previewArticles = computed(() => articles.value.filter((a) => a.preview));

  watch(previewArticles, (newVal) => {
    console.log("[useArticleStore] previewArticles", newVal);
  },{
    immediate: true,
  });

  return {
    initialized,
    add,
    articles,
    previewArticles,
  };
});
