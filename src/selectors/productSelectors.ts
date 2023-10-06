// import { createSelector } from 'reselect';
// import { createCachedSelector } from 're-reselect';
// import { RootState } from 'store/store';

// export const getProducts = (state: RootState) => state.products;

// export const getProductById = createCachedSelector(
//     [getProducts, (state: RootState, productId: number) => productId],
//     (products, productId) => products.find(product => product.id === productId)
// )(
//     (state, productId) => productId // Cache key generator
// );
