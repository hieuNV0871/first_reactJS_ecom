
import classNames from "classnames/bind";
import styles from './Home.module.scss'

import images from "~/assets/images/images";
import Helmet from "~/components/Helmet/Helmet";
import Slider from "~/components/Slider/Slider";
import PolicyCard from "~/components/PolicyCard/PolicyCard";
import ProductCard from "~/components/ProductCard/ProductCard";

const cx = classNames.bind(styles)
const colors = {
    blue: '#4267b2',
    pink: '#FFB5C5',
    orange: '#F3C246'
}

const sliderItems = [
    {
        title: 'Polo nu coolmate lacoste',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a ullam consequuntur atque vitae minus porro molestiae repellat, temporibus ducimus perferendis illum ut in cumque sed quasi iste nisi aliquam.',
        img: images.slideImage1,
        path: '/',
        color: colors.blue
    },
    {
        title: 'Polo nu coolmate lacoste',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a ullam consequuntur atque vitae minus porro molestiae repellat, temporibus ducimus perferendis illum ut in cumque sed quasi iste nisi aliquam.',
        img: images.slideImage2,
        path: '/',
        color: colors.pink
    },    {
        title: 'Polo nu coolmate lacoste',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui a ullam consequuntur atque vitae minus porro molestiae repellat, temporibus ducimus perferendis illum ut in cumque sed quasi iste nisi aliquam.',
        img: images.slideImage3,
        path: '/',
        color: colors.orange
    },
]


function Home() {


    return ( 
            <Helmet title='Trang chủ'>
                <Slider items = {sliderItems} auto = {true}/>
                <PolicyCard/>
                <ProductCard/>
            </Helmet>
     );
}

export default Home;