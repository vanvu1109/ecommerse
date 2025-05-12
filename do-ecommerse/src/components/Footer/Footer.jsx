import styles from './styles.module.scss';

function MyFooter() {
    const { container, containerItem, containerContent, des, msg } = styles;
    return (
        <div className={container}>
            <div className={containerItem} >
                <div>
                    <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo.png" alt="" />
                </div>
                <div>
                    <ul className={containerContent}>
                        <li>Home</li>
                        <li>Elements</li>
                        <li>Shop</li>
                        <li>Blog</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Compare</li>
                    </ul>
                </div>
                <div className={des}>
                    <p>Guaranteed safe ckeckout</p>
                </div>
                <div>
                    <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
                </div>
                <div className={msg}>
                    <p>Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.</p>
                </div>
            </div>
        </div>
    )
}

export default MyFooter;
