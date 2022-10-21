
import { Link } from "react-router-dom";

import classNames from "classnames/bind"
import styles from './ProductCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button/Button";


const cx = classNames.bind(styles)
function ProductItem(props) {
    return ( 
        <div className={cx('product-card')}>
                <Link to={`/catalog/${props.slug}`}>
                    <div className={cx('images')}>
                        <img src={props.image01} alt="" />
                        <img src={props.image02} alt="" />
                    </div>
                    <h3 className={cx('name')}>{props.title}</h3>
                    <div className={cx('price')}>
                        {props.price}
                        <span className={cx('old-price')}>
                            <del>399000</del>
                        </span>
                    </div>
                </Link>
                <div className={cx('btn')}>
                    <Button 
                            className={cx('cart-btn')}
                            to={`/catalog/${props.slug}`}
                            primary
                            large
                            leftIcon={<FontAwesomeIcon icon={faShoppingCart}/>}
                    >
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
     );
}

export default ProductItem;