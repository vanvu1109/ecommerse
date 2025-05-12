import { useEffect } from "react";
import AdvanceHeadling from "../AdvanceHeadling/AdvanceHeading";
import Banner from "../Banner/Banner";
import MyHeader from "../Header/Header";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
import Info from "../info/info";
import styles from './styles.module.scss';
import { getProducts } from "../../apis/productsService";

function HomePage() {


    useEffect(() => {
        getProducts()
    }, []);


    return (
        <>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProduct />
            <div style={{
                height: '200px'
            }}></div>
        </>
    );
}

export default HomePage;