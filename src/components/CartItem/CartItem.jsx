import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "~/redux/shopping-cart/cartItemslice";

import classNames from "classnames/bind";
import styles from './CartItem.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSubtract, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function CartItem(data) {

    const dispatch = useDispatch()
    const [item, setItem] = useState(data.item)
    const [quantity, setQuantity] = useState(data.item.quantity)
    useEffect(()=>{
        setItem(data.item)
        setQuantity(data.item.quantity)
    }, [data.item])

    const updateQuantity = (type) => {
        if(type === "plus") {
            dispatch(updateItem(
                {...item, quantity: quantity + 1 > item.product.quantity ? quantity : quantity + 1}
            ))
        }else {
            dispatch(updateItem(
                {...item, quantity: quantity-1 < 1 ? 1 : quantity -1}
            ))
        }
    }
    const removeCartItem = () => {
        dispatch(removeItem(item))
    }
    return ( 
        <div className={cx('cart-items')}>
            <div className={cx('cart-item')}>
                <div className={cx('info')}>
                    <img src= {item.product.image01} alt="" />
                    <p>{item.product.title} - {item.color} - {item.size} </p>
                    <span>{item.product.price}</span>
                </div>
                <div className={cx("actions")}>
                    <div className={cx('quantity')}>
                        <div className={cx('quantity-btn')} onClick={()=>updateQuantity()}>
                            <FontAwesomeIcon icon={faSubtract}/>
                        </div>
                        <div className={cx('quantity-input')}>
                            {quantity}
                        </div>
                        <div className={cx('quantity-btn')} onClick={()=>updateQuantity("plus")}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                    </div>
                    <div className={cx('delete-btn')} onClick={()=>removeCartItem()}>
                        <FontAwesomeIcon icon = {faTrash} />
                    </div>
                </div>
                

            </div>
        </div>
     );
}

export default CartItem;