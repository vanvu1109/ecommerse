import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxICon, dataMenu } from './constant';
import styles from './styles.module.scss';
import Logo from '@icons/images/Logo-retina.webp';

import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox, container } =
    styles;
  return (
   <div className={container}>
     <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxICon.map(item => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map(item => {
            return <Menu content={item.content} href={item.href} />;
          })}
        </div>
      </div>
      <div>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: '153px',
            height: '53px',
          }}
        />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu.slice(3, dataMenu.length).map(item => {
            return <Menu content={item.content} href={item.href} />;
          })}

          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadIcon} alt={reloadIcon} />
            <img width={26} height={26} src={heartIcon} alt={heartIcon} />
            <img width={26} height={26} src={cartIcon} alt={cartIcon} />
          </div>
        </div>
      </div>
    </div>  
   </div>
  );
}

export default MyHeader;
