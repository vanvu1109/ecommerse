import MyButton from '../Button/Button';
import CountdownTimer from '../CoundownTimer/CoudownTimer'; 
import styles from './styles.module.scss'

function CoundownBanner() {
    const { container, containerTimer, title, boxBtn } = styles;
    const targetDate = "2025-12-31T23:59:59";
    return ( 
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate}/>
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxBtn}>
                <MyButton content={'Buy Now'}/>
            </div>

        </div>
     );
}

export default CoundownBanner;