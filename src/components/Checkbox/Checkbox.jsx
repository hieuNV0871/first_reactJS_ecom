import { useRef } from "react";

import classNames from "classnames/bind";
import styles from "./Checkbox.module.scss"


const cx = classNames.bind(styles)

function Checkbox(props) {
    const inputRef = useRef(null)
    const onChange = () => {
        if(props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return ( 
        <label className={cx('custom-checkbox')}>

            <input 
                type="checkbox" 
                checked= {props.checked}
                onChange = {onChange}
                ref= {inputRef}
            />
            {props.label}
        </label>
     );
}

export default Checkbox;