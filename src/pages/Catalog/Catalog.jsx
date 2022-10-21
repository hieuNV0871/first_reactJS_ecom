import { useCallback, useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from './Catalog.module.scss'


import Helmet from "~/components/Helmet/Helmet";
import { productData } from "~/components/ProductCard/ProductCard";
import ProductItem from "~/components/ProductCard/ProductItem";
import Checkbox from "~/components/Checkbox/Checkbox";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles)

const categorys = [
    {
        display: 'Áo thun',
        categorySlug: 'ao-thun'
    },
    {
        display: 'Áo somi',
        categorySlug: 'ao-somi'
    },
    {
        display: 'Quần jean',
        categorySlug: 'quan-jean'
    },
]

const pricesValue = [
    {
        display: 'dưới 100k',
        start: 0,
        end: 100000
    },
    {
        display: '100k đến 200k',
        start: 100000,
        end: 200000

    },
    {
        display: '200k đến dưới 500k',
        start: 200000,
        end: 500000
    },
    {
        display: 'trên 500k',
        start: 500000,
        end: 1000000000000000,
    },

]

function Catalog() {
    const initFilter = {
        category: [],
        price: []
    }
    const productList = productData.getAllProducts()
    const [products, setProducts] = useState(productList)
    const [filter, setFilter] = useState(initFilter)

    const updateProducts = useCallback(
        ()=> {
            let temp = productList
            if(filter.category.length > 0) {
                temp = temp.filter(e=>filter.category.includes(e.categorySlug))
            }
            if(filter.price.length > 0) {
                    const a = filter.price.map(p=>p.end)
                    const aa = filter.price.map(p=>p.start)
                    const b = a.sort()
                    const bb = aa.sort()
                    const c = b[b.length-1]
                    const cc = bb[bb.length -1]
                    if(b.length > 1) {
                        temp = temp.filter( e=> Number(e.price) > cc && Number(e.price) < c)
                    }else {
                        temp = temp.filter(e=> (aa < Number(e.price) && Number(e.price) < a ))
                    }
            }
            setProducts(temp)
        }, [filter, productList]
    )
    const clearFilter = ()=> setFilter(initFilter)

    useEffect(()=>updateProducts(), [updateProducts])

    const filterSelect = (type, checked, item) => {
        if(checked){
            switch(type) {
                case "category":
                    setFilter({...filter, category: [...filter.category, item.categorySlug]})
                    break  
                case "price":
                    setFilter({...filter, price: [...filter.price, {start: item.start, end: item.end}]  })
                    break       
                default: 
            }
        }else {
            switch(type) {
                case "category":
                    const newCategory = filter.category.filter(e=> e!== item.categorySlug)
                    setFilter({...filter, category: newCategory})
                    break
                case "price":
                    let newPrice = filter.price.map(p => {
                        if(p.end !== item.end) {
                            return p
                        }
                        return 0
                    })
                    newPrice.sort().pop()
                    setFilter({...filter, price: newPrice})
                    break  
                default: 
            }
        }
    }
    return ( 
        <Helmet title="Sản phẩm">

            <div className={cx('catalog')}>
                <div className={cx('filter')}>
                    <div className={cx('widget')}>
                        <div className={cx('widget-title')}>Danh mục sản phẩm</div>
                        <div className={cx('widget-content')}>
                            {
                                categorys.map((category, index) => (
                                    <div className={cx('item')} key={index}>
                                        <Checkbox 
                                            label={category.display}
                                            onChange = {input=>filterSelect("category", input.checked, category)}
                                            checked = {filter.category.includes(category.categorySlug)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={cx('widget')}>
                        <div className={cx('widget-title')}>Giá sản phẩm</div>
                        <div className={cx('widget-content')}>
                            
                            {
                                
                                pricesValue.map((price, index) => (
                                    
                                    <div className={cx('item')} key={index}>
                                        <Checkbox 
                                            label={price.display}
                                            onChange = {input=>filterSelect("price", input.checked, price)}
                                            checked = {filter.price.map(p=>p.start).includes(price.start)}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <Button primary onClick={clearFilter}>Xóa bộ lọc</Button>
                    </div>

                </div>
                <div className={cx('content')}>
                    {
                        products.length > 0 ? (
                            products.map((product, index)=> (
                                <ProductItem 
                                    key={index}
                                    image01 = {product.image01}
                                    image02 = {product.image02}
                                    title = {product.title}
                                    price = {product.price}
                                    slug = {product.slug}
                                />
                            ))
                        ) : (
                            <div style={{color: 'red', textAlign: 'center'}}>Không có sản phẩm để hiển thị</div>
                        )
                       
                    }
                </div>
            </div>
        </Helmet>
     );
}

export default Catalog;