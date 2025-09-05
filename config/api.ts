// export const BASE_URL = "10.170.150.108:3000"; //external
export const BASE_URL = "192.168.31.103:3000"; //home wifi

// products

export const GET_ALL_PRODUCTS = `${BASE_URL}/api/product`;
export const GET_PRODUCT_BY_ID = (id: number) =>
  `${BASE_URL}/api/product/${id}`;
