
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Footer.module.scss'

import config from "~/configs/config";
import images from "~/assets/images/images";

const cx = classNames.bind(styles)

const footerAboutLinks = [
    {
        display: 'Giới thiệu',
        path: config.routes.home
    },
    {
        display: 'Liên hệ',
        path: config.routes.home
    },
    {
        display: 'Tuyển dụng',
        path: config.routes.home
    },
    {
        display: 'Tin tức',
        path: config.routes.home
    },
    {
        display: 'Hệ thống cửa hàng',
        path: config.routes.home
    },
]

const customerCareLinks = [
    {
        display: 'Chính sách đổi trả',
        path: config.routes.product
    },
    {
        display: 'Chính sách bảo hành',
        path: config.routes.home
    },
    {
        display: 'Chính sách hoàn tiền',
        path: config.routes.home
    },
]

function Footer() {
    return ( 
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className= {cx('switchboard')}>
                    <h3 className={cx('title')}>Tổng đài hỗ trợ</h3>
                    <div className={cx('switchboard-content')}>
                        <span>Liên hệ đặt hàng: <a href="tel:0999999999">0999999999</a></span>
                        <span>Thắc mắc đơn hàng: <a href="tel:0999999999">0999999999</a></span>
                        <span>Góp ý, khiếu nại: <a href="tel:0999999999">0999999999</a></span>
                    </div>
                </div>
                <div className= {cx('about')}>
                    <h3 className={cx('title')}>Về YOLO</h3>
                    <div className={cx('about-links')}>
                        {
                            footerAboutLinks.map((footerAboutLink, index) => (
                                <Link key={index} to = {footerAboutLink.path}>{footerAboutLink.display}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className={cx('customer-care')}>
                    <h3 className={cx('title')}>Chăm sóc khách hàng</h3>
                    <div className={cx('customer-care-links')}>
                        {
                            customerCareLinks.map((customerCareLink, index) => (
                                <Link key={index} to={customerCareLink.path}>{customerCareLink.display}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Consequuntur expedita sequi laboriosam commodi corrupti 
                        voluptatibus id possimus quae, sed odit.
                    </p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;