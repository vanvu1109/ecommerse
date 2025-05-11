import MainLayout from '@components/Layout/Layout'
import { dataInfo } from './constants';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss'

function Info() {
    const { container } = styles;
    return ( 
        <div>
            <MainLayout>
                <div className={container}>
                    {
                        dataInfo.map((item)=>{
                            return <InfoCard content={item.title} decription={item.descriptions} src={item.src}/>
                        })
                    }
                </div>
            </MainLayout>
        </div>
     );
}

export default Info;