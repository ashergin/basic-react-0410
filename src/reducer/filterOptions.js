import defaultArticles from '../fixtures'
import { DELETE_ARTICLE, SELECT_ARTICLES } from '../constants'

export default (
  selectFilterState = {
    selected: [],
    articles: defaultArticles
  },
  action
) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLES:
      return {
        selected: payload.selected,
        articles: selectFilterState.articles
      }
    case DELETE_ARTICLE:
      return {
        selected: selectFilterState.selected,
        articles: selectFilterState.articles.filter(
          (article) => article.id !== payload.id
        )
      }
    default:
      return selectFilterState
  }
}
