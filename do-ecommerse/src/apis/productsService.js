import axiosClient from "./axiosClient  "


const getProducts = async() => {
    const res = await axiosClient.get('/product');

    console.log(res)
}

export { getProducts }