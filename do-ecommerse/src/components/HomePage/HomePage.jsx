import AdvanceHeadling from "../AdvanceHeadling/AdvanceHeading";
import Banner from "../Banner/Banner";
import MyHeader from "../Header/Header";
import HeadingListProduct from "../HeadingListProduct/HeadingListProduct";
import Info from "../info/info";
import styles from './styles.module.scss'

function HomePage() {
    const { container } = styles;
    return ( 
        <div>
            <div className={container}>
                <MyHeader/>
                <Banner/>
                <Info/>
                <AdvanceHeadling/>
                <HeadingListProduct/>
            </div>
        </div>
     );
}

export default HomePage;