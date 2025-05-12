import CoundownBanner from "../CountdownBanner/CuontdownBanner";
import MainLayout from "../Layout/Layout";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./styles.module.scss"

function HeadingListProduct() {
    const { container, containerItem } = styles;
    const targetDate = "2025-12-31T23:59:59";
    return (
        <MainLayout>
            <div className={container}>
                <CoundownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />

                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;