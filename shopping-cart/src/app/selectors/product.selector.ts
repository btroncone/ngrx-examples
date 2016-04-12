let STORE_SLICE_NAME = 'products';

export const productSelector = (store: any) => store.select(STORE_SLICE_NAME);
export const productAsArraySelector = (store: any) => store.select(STORE_SLICE_NAME).map(res => Object.keys(res).map(key => res[key]));

