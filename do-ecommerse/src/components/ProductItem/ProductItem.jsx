import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function ProductItem({ src, privewSrc, name, priceClass }) {
    const { boxImg, showImgWhenHowver, showFnWhenHover, boxIcon, title, price } = styles;
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt="image" />
                <img
                    src={privewSrc}
                    alt="image" className={showImgWhenHowver} />
                <div className={showFnWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>

                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={price}>{priceClass}</div>
        </div>

    );
}

export default ProductItem;