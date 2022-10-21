
import classNames from "classnames/bind";
import styles from './Menu.module.scss';


const cx = classNames.bind(styles)
function MenuItem({data}) {
    return ( 
        <div className={cx('menu-item')}>
            <img src={data.product.image01} alt=""/>
            <span className={cx('item-title')}>{data.product.title}</span>
            <span className={cx('item-price')}>{data.product.price}</span>
        </div>
     );
}

export default MenuItem;