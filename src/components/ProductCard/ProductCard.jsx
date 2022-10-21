
import classNames from "classnames/bind"
import styles from './ProductCard.module.scss'

import images from "~/assets/images/images";
import ProductItem from "./ProductItem";

const cx = classNames.bind(styles)

const products = [
    {
        title: "Áo thun Dinosaur 01",
        price: '189000',
        image01: images.productImage1_1,
        image02: images.productImage1_2,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"],
        quantity: 10,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Dinosaur 02",
        price: '159000',
        image01: images.productImage2_1,
        image02: images.productImage2_2,
        categorySlug: "ao-thun",
        colors: ["white", "red", "blue"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"],
        quantity: 10,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Dinosaur 03",
        price: '190000',
        image01: images.productImage3_1,
        image02: images.productImage3_2,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange", "yellow"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"],
        quantity: 10,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Polo 04",
        price: '194000',
        image01: images.productImage4_1,
        image02: images.productImage4_2,
        categorySlug: "ao-thun",
        colors: ["white", "orange", "blue"],
        slug: "ao-thun-polo-04",
        size: ["xl"],
        quantity: 10,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Polo 05",
        price: '194000',
        image01: images.productImage5_1,
        image02: images.productImage5_2,
        categorySlug: "ao-thun",
        colors: ["white", "pink"],
        slug: "ao-thun-polo-05",
        size: ["xxl"],
        quantity: 6,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Polo 06",
        price: '4000',
        image01: images.productImage6_1,
        image02: images.productImage6_2,
        categorySlug: "ao-thun",
        colors: ["black"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"],
        quantity: 6,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo somi caro 07",
        price: '194000',
        image01: images.productImage7_1,
        image02: images.productImage7_2,
        categorySlug: "ao-somi",
        colors: ["white", "red", "orange", "blue"],
        slug: "ao-somi-caro-07",
        quantity: 6,
        size: ["l", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo somi dài tay 08",
        price: '194000',
        image01: images.productImage8_1,
        image02: images.productImage8_2,
        categorySlug: "ao-somi",
        colors: ["white", "red", "black"],
        quantity: 6,
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo somi tay dài 09",
        price: '194000',
        image01: images.productImage9_1,
        image02: images.productImage9_2,
        categorySlug: "ao-somi",
        quantity: 5,
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-09",
        size: ["m"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Quần jean phong cách 10",
        price: '194000',
        image01: images.productImage10_1,
        image02: images.productImage10_2,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-10",
        quantity: 18,
        size: ["l"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Quần jean 11",
        price: '1904000',
        image01: images.productImage11_1,
        image02: images.productImage11_2,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-11",
        quantity: 18,
        size: ["s", "m", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Quần jean 12",
        price: '194000',
        image01: images.productImage12_1,
        image02: images.productImage12_2,
        categorySlug: "quan-jean",
        colors: ["blue"],
        slug: "quan-jean-12",
        size: ["s", "m", "xl"],
        quantity: 18,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Dinosaur 13",
        price: '189000',
        image01: images.productImage1_1,
        image02: images.productImage1_2,
        categorySlug: "ao-thun",
        colors: ["white", "red"],
        slug: "ao-thun-dinosaur-13",
        quantity: 18,
        size: ["s", "m", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Dinosaur 14",
        price: '159000',
        image01: images.productImage2_1,
        image02: images.productImage2_2,
        categorySlug: "ao-thun",
        colors: ["white", "blue"],
        quantity: 18,
        slug: "ao-thun-dinosaur-14",
        size: ["s", "m"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo thun Dinosaur 15",
        price: '190000',
        image01: images.productImage3_1,
        image02: images.productImage3_2,
        categorySlug: "ao-thun",
        colors: ["red", "blue"],
        quantity: 18,
        slug: "ao-thun-dinosaur-15",
        size: ["xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo somi dài tay 16",
        price: '194000',
        image01: images.productImage8_1,
        image02: images.productImage8_2,
        categorySlug: "ao-somi",
        colors: ["blue", "black"],
        slug: "ao-somi-dai-tay-16",
        quantity: 18,
        size: ["m", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Áo somi tay dài 17",
        price: '194000',
        image01: images.productImage9_1,
        image02: images.productImage9_2,
        categorySlug: "ao-somi",
        colors: ["white", "blue"],
        slug: "ao-somi-tay-dai-17",
        quantity: 18,
        size: ["s", "l", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    {
        title: "Quần jean phong cách 18",
        price: '194000',
        image01: images.productImage10_1,
        image02: images.productImage10_2,
        categorySlug: "quan-jean",
        colors: ["blue", "black"],
        slug: "quan-jean-phong-cach-18",
        quantity: 18,
        size: ["s", "m", "l", "xl"],
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non consequatur ducimus iste dolor rerum numquam quidem dolorum quos, sunt enim reiciendis. Perspiciatis illo, nesciunt libero pariatur iure eius deleniti inventore!"
    },
    // 18 products
]
const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}
const getProductsBySlug = (slug) => products.find(e=>e.slug === slug)

const getCartItem = cartItems => {
    let res = []
    if(cartItems.length > 0) {
        cartItems.forEach(e=>{
            res.push({
                ...e,
                product: getProductsBySlug(e.slug)
            })
        })
    }
    return res
}

export const productData = {
    getAllProducts,
    getProducts,
    getProductsBySlug,
    getCartItem
}

function ProductCard() {
    return ( 
        <section className={cx('wrapper')}>
            <section>
                <h3 className={cx('title')}>sản phẩm bán chạy nhất</h3>
                <div className={cx('product-items')}>
                {
                    productData.getProducts(4).map((product, index) => (
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
            <section>
                <h3 className={cx('title')}>sản phẩm mới</h3>
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

            <section>
                <h3 className={cx('title')}>sản phẩm khong moi</h3>
                <div className={cx('product-items')}>
                {
                    productData.getProducts(10).map((product, index) => (
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
           
        </section>
     );
}

export default ProductCard;