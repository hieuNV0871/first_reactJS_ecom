import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './Button.module.scss';


const cx = classNames.bind(styles)
function Button({
    to,
    href, 
    primary = false, 
    outline = false, 
    text = false,
    disabled = false,
    rounded = false,
    small = false, 
    large = false, 
    leftIcon = false,
    rightIcon = false,
    className,
    children,
    onClick,
    ...passProps

}) {
    let Component = 'button';
    const props = {
        onClick,
        ...passProps
    }
    if(disabled){
        delete props.onClick 
    }
    if(to){
        props.to = to
        Component = Link
    }else if(href){
        props.href = href
        Component = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary: primary,
        outline: outline,
        text,
        disabled,
        rounded,
        small,
        large,

        
    })
    return ( 
        <Component className = {classes} { ...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
     );
}

export default Button;