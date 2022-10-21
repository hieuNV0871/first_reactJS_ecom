import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import classNames from "classnames/bind";
import styles from './Cart.module.scss'


import Helmet from "~/components/Helmet/Helmet";
import { productData } from "~/components/ProductCard/ProductCard";
import Button from "~/components/Button/Button";
import config from "~/configs/config";
import CartItem from "~/components/CartItem/CartItem";

const cx = classNames.bind(styles)

function Cart() {
    const cartItems = useSelector(state=>state.value)
    const [cartProducts, setCartProducts] = useState(productData.getCartItem(cartItems))

    const [totalProducts, setTotalProducts] = useState(0)

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setCartProducts(productData.getCartItem(cartItems))
        setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * Number(item.price)), 0))
        setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0))
    }, [cartItems])

    return ( 
        <Helmet title="gio hang">
            <div className={cx('cart')}>
                <div className={cx('cart-info')}>
                    <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
                    <span>Thành tiền: <span className={cx('price')}>{totalPrice}</span></span>
                    <Button primary to={config.routes.home}>Đặt hàng</Button>
                    <Button primary to={config.routes.catalog} >Tiếp tục mua hàng</Button>

                </div>
                <div className={cx('cart-list')}>
                    {
                        cartProducts.map((cartProduct, index)=> (
                            <CartItem key={index} item = {cartProduct}></CartItem>
                        ))
                    }
                </div>
            </div>
        </Helmet>
     );
}

export default Cart;