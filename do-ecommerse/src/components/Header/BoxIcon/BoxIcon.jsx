import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import intaIcon from '@icons/svgs/intaIcon.svg';

function BoxIcon({ type, href}) {
    const { boxIcon } = styles;

    const handleRanderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon
                
            case 'ytb':
                return ytbIcon
                
            case 'ins':
                return intaIcon
                
        }
    }; 

    return (
        <div className={boxIcon}>
            <img src={handleRanderIcon(type)} alt={type} />
        </div>
    )
};
export default BoxIcon;