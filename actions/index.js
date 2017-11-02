export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

export function updateCategories(data) {
  return { type: UPDATE_CATEGORIES, data }
}
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'

export function updateProducts(data, categoryId) {
  return { type: UPDATE_PRODUCTS, data, categoryId }
}
