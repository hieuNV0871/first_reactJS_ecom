import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './PolicyCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCreditCard, faDiamond, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
const policyCards = [
    {
        icon: <FontAwesomeIcon icon={faBagShopping}/>,
        name: 'Miễn phí giao hàng',
        description: 'Miễn phí ship với đơn hàng > 259k'
    },
    {
        icon: <FontAwesomeIcon icon={faCreditCard}/>,
        name: 'Thanh toán COD',
        description: 'Thanh toán khi nhận hàng (COD)'
    },
    {
        icon: <FontAwesomeIcon icon={faDiamond}/>,
        name: 'Khách hàng VIP',
        description: 'Ưu đãi dành cho khách hàng VIP'
    },
    {
        icon: <FontAwesomeIcon icon={faHandHoldingDollar}/>,
        name: 'Hỗ trợ bảo hành',
        description: 'Đổi sửa đồ tại tất cả cửa hàng'
    },
]
function PolicyCard() {
    return ( 
        <section className={cx('wrapper')}>
            <div className={cx('policy-cards')}>
                {
                    policyCards.map((policyCard, index) => (
                        <Link key={index}>
                            <div className={cx('card')} >
                                <div className={cx('icon')}>{policyCard.icon}</div>
                                <div className={cx('content')}>
                                    <div className={cx('name')}>{policyCard.name}</div>
                                    <div className={cx('title')}>{policyCard.description}</div>
                                </div>
                            </div>
                        </Link>
                        
                    ))
                }
            </div>
        </section>
     );
}

export default PolicyCard;