import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_STORE_NAME
} from "./types";
import axios from 'axios';


export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
};

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
};

export const getStoreName = () => { //Aqui deberia utilizar un bloque de try-catch
    return async (dispatch) => {
        const { data } = await axios.get('http://localhost:3001/store');
        return dispatch({ type: GET_STORE_NAME, payload: data.name });
    };
};
//Sin destructuring
/* export const getStoreName = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/store');
        return dispatch({ type: GET_STORE_NAME, payload: response.data });
    };
}; */