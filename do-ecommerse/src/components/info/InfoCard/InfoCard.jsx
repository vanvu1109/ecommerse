import styles from '../styles.module.scss';

function InfoCard({ content, decription, src }) {
    const { containerCard,containerContent,title,des } = styles;
    return ( 
        <div className={containerCard}>
            <img width={40} height={40} src={src} alt='truckicon' />

            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{decription}</div>
            </div>
        </div>
     );
}

export default InfoCard;