import MainLayout from "../Layout/Layout";
import styles from './styles.module.scss'
import ProductItem from "@components/ProductItem/ProductItem"

function PopularProduct({ data }) {
    const { container } = styles;
    return (
        <>
            <MainLayout>
                <div className={container}>
                    {
                        data.map((item) => {
                            return <ProductItem key={item.id}
                                src={item.images[0]}
                                privewSrc={item.images[1]}
                                name={item.name}
                                priceClass={`$${item.price}`}
                            />
                        })
                    }
                </div>
            </MainLayout>
        </>
    );
}

export default PopularProduct;