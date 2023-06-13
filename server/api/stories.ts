
import stories from "@/data/stories";

export default defineEventHandler((event) => {
    const query = getQuery(event)

    if(query.id){
      return stories.find((s) => s.id === query.id)
    }

    if(Array.isArray(query.ids)){
      const ids = query.ids
      return ids.map((id) => stories.find((s) => s.id === id))
    }

    return stories
  })