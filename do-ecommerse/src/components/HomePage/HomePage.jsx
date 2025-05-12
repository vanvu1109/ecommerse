import { useEffect, useState } from "react";
import AdvanceHeadling from "../AdvanceHeadling/AdvanceHeading";
import Banner from "../Banner/Banner";
import MyHeader from "../Header/Header";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
import Info from "../info/info";
import styles from './styles.module.scss';
import { getProducts } from "../../apis/productsService";
import PopularProduct from "../PopularProduct/PopularProduct";
import SaleHomepage from "../SaleHomepage/SaleHomepage";

function HomePage() {


    const [listProducts, setlistProducts] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setlistProducts(res.contents)
        })
    }, []);

    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProduct data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, 10)} />
            <SaleHomepage />
            <div style={{
                height: '200px'
            }}></div>
        </>
    );
}

export default HomePage;