
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faBagShopping, faUser, faSignIn, faUserPlus, faSignOut} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import images from '~/assets/images/images';
import config from '~/configs/config';
import Button from '~/components/Button/Button';
import Search from '~/components/Search/Search';
import {Wrapper as PopperUser} from '~/components/Popper/Popper'
import { Menu as CartItems } from '~/components/Popper/Popper';
import { productData } from '~/components/ProductCard/ProductCard';


const cx = classNames.bind(styles)
const mainNav = [
    {
        display: 'Trang chủ',
        path: config.routes.home
    },
    {
        display: 'Sản phẩm',
        path: config.routes.catalog
    },
    {
        display: 'Phụ kiện',
        path: config.routes.accessory
    },
    {
        display: 'Liên hệ',
        path: config.routes.contact
    },
    
]




function Header({CTcurrentUser}) {
    const cartItems = useSelector(state=>state.value)
    const cartItem = productData.getCartItem(cartItems)
    const [currentUser, setCurrentUser] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    CTcurrentUser = currentUser
    const handleShowSearch = () => {
        setShowSearch(!showSearch)
    }

    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                
                <div className={cx('navbar')}>
                    {mainNav.map((nav, index)=>(
                        <div key={index}>
                            <NavLink end className={(nav)=>cx('nav-item', {active: nav.isActive})} to = {nav.path}>
                                    {nav.display}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <div className={cx('logo')}>
                    <Link
                        
                        to={config.routes.home}
                    >
                        <img src={images.logo} alt="" /> 
                    </Link>
                </div>
                <div className={cx('action')}>
                    <div className={cx('icon')}>
                        {showSearch && (<Search/>)}
                            <div className={cx('icon-box')}>
                                <FontAwesomeIcon className={cx('search-icon')}icon = {faMagnifyingGlass} 
                                                 onClick = {handleShowSearch}
                                />
                            </div>
                            
                            <CartItems items={cartItem} CTcurrentUser = {CTcurrentUser}>
                                <div className={cx('icon-box')}>
                                    <FontAwesomeIcon icon = {faBagShopping} />
                                </div>
                            </CartItems>

                            {
                                currentUser ? (
                                    <Tippy
                                    hideOnClick
                                    interactive
                                    render={attrs => (
                                        <div className = {cx('user-item')} tabIndex="-1" {...attrs}>
                                            <PopperUser>
                                                <Button outline >Thông tin tài khoản</Button>
                                                <Button 
                                                    outline
                                                    leftIcon = {<FontAwesomeIcon icon={faSignOut}/>}
                                                    onClick = {()=>setCurrentUser(false)}
                                                >
                                                    Đăng xuất
                                                </Button>
                                            </PopperUser>
                                        </div>
                                    )}
                                >
                                   <div className= {cx('user-avatar')}>
                                        <img src='https://th.bing.com/th/id/R.52825f6db057a0491a5f7380987592f0?rik=HPFcX2NaIFEWQA&pid=ImgRaw&r=0' alt=''/>
                                    </div>
                                </Tippy>
                                    
                                ) : (
                                <Tippy
                                    hideOnClick
                                    interactive
                                    render={attrs => (
                                        <div className = {cx('user-item')} tabIndex="-1" {...attrs}>
                                            <PopperUser>
                                                <Button 
                                                    primary
                                                    leftIcon = {<FontAwesomeIcon icon={faSignIn}/>}
                                                    onClick = {()=>setCurrentUser(true)}
                                                >
                                                    Đăng nhập
                                                </Button>
                                                <Button 
                                                    primary
                                                    leftIcon = {<FontAwesomeIcon icon={faUserPlus}/>}
                                                >
                                                    Đăng ký
                                                </Button>
                                            </PopperUser>
                                        </div>
                                    )}
                                >
                                    <div className={cx('icon-box')}>
                                        <FontAwesomeIcon icon = {faUser}/>
                                    </div>
                                </Tippy>
                                )
                            }
                            
                    </div>
                </div>
            </div>
        </header>    
     );
}

export default Header;