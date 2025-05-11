import CountdownTimer from "../CoundownTimer/CoudownTimer";
import CoundownBanner from "../CountdownBanner/CuontdownBanner";
import MainLayout from "../Layout/Layout";
import styles from "./styles.module.scss"

function HeadingListProduct() {
    const { container,containerItem } = styles;
    const targetDate = "2025-12-31T23:59:59";
    return ( 
        <MainLayout>
            {/* <CountdownTimer targetDate={targetDate}/> */}
            <div className={container}>
                <CoundownBanner />
                <div className={containerItem}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;