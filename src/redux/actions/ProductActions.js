import { ActionsTypes } from '../contants/ActionsTypes'

export const ProductActions = (products) => {
    return {
        type: ActionsTypes.SET_PRODUCTS,
        payload: products,
    }
}

export const SelectProduct = (product) => {
    return {
        type: ActionsTypes.SELECTED_PRODUCT,
        payload: product,
    }
}
