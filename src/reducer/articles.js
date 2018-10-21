import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SELECT_ARTICLES } from '../constants'

let articles = defaultArticles

export default (articlesState = articles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      articles = articles.filter((article) => article.id !== payload.id)
      return articles

    case SELECT_ARTICLES:
      return payload.ids.length > 0
        ? articles.filter((article) =>
            payload.ids.find((id) => id === article.id)
          )
        : articles

    default:
      return articlesState
  }
}
