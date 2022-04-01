import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../common/api/shopApi.js";

export const fethAsyncProducts = createAsyncThunk("/products/fethAsyncProducts", async () => {
    const { data } = await publicRequest.get("/products");
    return data;
})

export const fethAsyncProductsByCat = createAsyncThunk("/products/fethAsyncProductsByCat", async (cat) => {
    const { data } = await publicRequest.get(`/products?category=${cat}`);
    return data;
})

export const fethAsyncProductsBySearch = createAsyncThunk("/products/fethAsyncProductsBySearch", async (search) => {
    const { data: {data} } = await publicRequest.get(`/products/search?searchQuery=${search}`);
    return data;
})

export const fetchAsyncSelectedProduct = createAsyncThunk("/products/fethAsyncSelectedProduct", async (id) => {
    const { data} =await publicRequest.get(`/products/find/${id}`);
    return data;
})
    

const initialState = {products: [], status: "", productsByCat: [], productsBySearch: [], selectedProduct: {}};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
      refreshProducts: (state) => {
        state.products  = []
      },
      refreshProductsByCat: (state) => {
        state.productsByCat  = []
      },
      refreshSelectedProduct: (state) => {
          state.selectedProduct = {}
      }
}, 
extraReducers: { 
    [fethAsyncProducts.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [fethAsyncProducts.fulfilled]: (state, {payload}) => {
        return {...state, products: payload, status: "fulfilled"}
    },
    [fethAsyncProducts.rejected]: (state) => {
        return {...state, status: "rejected"}
    },
    [fethAsyncProductsByCat.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [fethAsyncProductsByCat.fulfilled]: (state, {payload}) => {
        return {...state, productsByCat: payload, status: "fulfilled"}
    } ,
    [fethAsyncProductsBySearch.fulfilled]: (state, {payload}) => {
        return {...state, productsBySearch: payload, status: "fulfilled"}
    }, 
    [fetchAsyncSelectedProduct.pending]: (state) => {
        return {...state, status: "pending"}
    },
    [fetchAsyncSelectedProduct.fulfilled]: (state, {payload}) => {
        return {...state, selectedProduct: payload, status: "fulfilled"}
    } ,
}
});

export const {refreshProducts,refreshProductsByCat, refreshSelectedProduct } = productSlice.actions
// export const { loginStart, loginSuccess, loginFailure, logoutStart } = productSlice.actions;
export const getAllProducts = (state) => state.products.products;
export const getAllProductsByCat = (state) => state.products.productsByCat;
export default productSlice.reducer;
