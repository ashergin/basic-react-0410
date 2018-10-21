import { INCREMENT, DELETE_ARTICLE, SELECT_ARTICLES } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function selectArticles(ids, options) {
  return {
    type: SELECT_ARTICLES,
    payload: { ids, options }
  }
}
