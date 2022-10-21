
import classNames from "classnames/bind";
import styles from './Menu.module.scss';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'

import images from "~/assets/images/images";
import {Wrapper as PopperWrapper} from '~/components/Popper/Popper'
import MenuItem from "./MenuItem";
import Button from "~/components/Button/Button";
import config from "~/configs/config";

const cx = classNames.bind(styles)
function Menu({children, items, CTcurrentUser}) {

    const renderItem = () => (
        items.map((item, index)=>(
            <MenuItem key={index} data={item}/>
        ))
    )
        
    return ( 
        <div>
            <Tippy
                
                interactive
                placement='bottom-end'
                render={attrs => (
                    <div className={cx('menu-items')} tabIndex = "-1" {...attrs}> 
                        <PopperWrapper>
                            {
                                items.length > 0 && CTcurrentUser === true ? (
                                    <>
                                        {
                                            renderItem()
                                        }
                                        <Button to = {config.routes.cart} primary className={cx('cart-btn')}>xem gio hang</Button>
                                    </>
                                ) : (
                                    <div className= {cx('emty-cart')}>
                                        <img src={images.emtyCart} alt=""/>
                                        <h4>Chưa có sản phẩm</h4>
                                    </div>
                                )
                            }
                            
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
        
     );
}

export default Menu;