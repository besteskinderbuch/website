
import articles from "@/data/articles";

export default defineEventHandler((event) => {
  const query = getQuery(event)

    if(query.id){
      return articles.find((s) => s.id === query.id)
    }

    if(Array.isArray(query.ids)){
      const ids = query.ids
      return ids.map((id) => articles.find((s) => s.id === id))
    }

    return articles
  })