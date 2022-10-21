import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "~/configs/config";

import { useDispatch } from "react-redux";
import { addItem } from "~/redux/shopping-cart/cartItemslice";

import classNames from "classnames/bind";
import styles from '~/components/ProductCard/ProductCard.module.scss'
import styles2 from './Product.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus, faSubtract} from "@fortawesome/free-solid-svg-icons"


import Helmet from "~/components/Helmet/Helmet";
import { productData } from "~/components/ProductCard/ProductCard";
import ProductItem from "~/components/ProductCard/ProductItem";
import Button from "~/components/Button/Button";


const cx = classNames.bind(styles)
const cx2 = classNames.bind(styles2)

function Product() {

    const dispatch = useDispatch()

    const {slug} = useParams()
    const product = productData.getProductsBySlug(slug)

    const [previewImage, setPreviewImage] = useState(product.image01)
    const [color, setColor] = useState(undefined)
    const [size, setSize] = useState(undefined)
    const [quantity, setQuantity] = useState(1)
    const updateQuantity = (type) => {
        if(type === "plus") {
            setQuantity(quantity + 1 > product.quantity ? quantity : quantity + 1)
        }else {
            setQuantity(quantity-1 < 1 ? 1 : quantity -1)
        }
    }
    useEffect(()=>{
        setPreviewImage(product.image01)
        setColor(undefined)
        setSize(undefined)
    }, [product])

    const check = () => {
        if(color === undefined) {
            alert("vui long chon mau sac")
            return false
        }
        if(size === undefined) {
            alert("vui long chon kich co")
            return false 
        }
        return true
    }
    const addToCart = () => {
        if(check()) {
            dispatch(addItem({
                slug: product.slug,
                color: color,
                size: size,
                quantity: quantity,
                price: product.price
            }))
            alert("Thêm sản phẩm vào giỏ hàng thành công")
        }
        
    }
    const goToCart = () => {

    }

    return ( 
        <Helmet title={product.title}>
            <div className={cx2('detail-product')}>
                <div className={cx2('images')}>
                    <div className={cx2('images-wrapper')}>
                        <div className={cx2('image-list')}>
                            <div className={cx2('image-item')} onClick = {()=>setPreviewImage(product.image01)}>
                                <img src={product.image01} alt="" />
                            </div>
                            <div className={cx2('image-item')} onClick = {()=>setPreviewImage(product.image02)}>
                            <img src={product.image02} alt="" />
                            </div>
                        </div>
                        <div className={cx2('preview-image')}>
                                <img src={previewImage} alt="" />
                        </div>
                    </div>
                    <div className={cx2('description')}>
                        <h3 className={cx2('desc-title')}>Chi tiết sản phẩm</h3>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className={cx2('info')}>
                    <h3 className={cx2('title')}>{product.title}</h3>
                    <span className={cx2('price')}>{product.price}</span>
                    <div className={cx2('item-wrapper')}>
                        <h4>Màu sắc</h4>
                        <div className={cx2('item-list')}>
                            {

                                product.colors.map((item, index) => (
                                    <div key={index} className = {cx2('item')}>
                                        <div 
                                            onClick={()=>setColor(item)}
                                            className = {cx2('circle', color === item ? 'active' : '')} style= {{backgroundColor: item}}></div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    <div className={cx2('item-wrapper')}>
                        <h4>Kích cỡ</h4>
                        <div className={cx2('item-list')}>
                            {

                                product.size.map((item, index) => (
                                    <div key={index} className = {cx2('item')}>
                                        <div className={cx2('circle', size === item ? 'active' : '')} onClick = {()=>setSize(item)}>
                                            <span>{item}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                    <div className={cx2('item-wrapper')}>
                        <h4>Số lượng</h4>
                        <div className={cx2('quantity')}>
                            <div className={cx2('quantity-btn')} onClick = {()=>updateQuantity()}>
                                <FontAwesomeIcon icon={faSubtract}/>
                            </div>
                            <div className={cx2('quantity-input')}>
                                {quantity}
                            </div>
                            <div className={cx2('quantity-btn')} onClick = {()=>updateQuantity("plus")}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        </div>

                    </div>
                    <div className={cx2('button-wrapper')}>
                        <Button primary onClick={()=>addToCart()}>Thêm vào giỏ hàng</Button>
                        <Button to={ config.routes.cart} primary onClick={()=>goToCart()}>Mua ngay</Button>
                    </div>
                </div>
            </div>
            <section>
                <h3 className={cx('title')}>Xem thêm sản phẩm khác</h3>
                <div className={cx('product-items')}>
                {
                    productData.getProducts(8).map((product, index) => (
                        <ProductItem 
                            key={index}
                            image01 = {product.image01}
                            image02 = {product.image02}
                            title = {product.title}
                            price = {product.price}
                            slug = {product.slug}
                        />
                    ))
                }

                </div>
                
            </section>
        </Helmet>
     );
}

export default Product