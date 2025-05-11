import MainLayout from "../Layout/Layout";
import styles from "./styles.module.scss"

function AdvanceHeadling() {
    const { container,headline,containerMiddleBox,des,titlle} = styles;
    return ( 
        <MainLayout>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>Don't miss super offers</p>
                    <p className={titlle}>Our best products</p>
                </div>
                <div className={headline}></div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeadling;