import classNames from "classnames/bind";
import styles from './Slider.module.scss'

import Button from "~/components/Button/Button";
const cx = classNames.bind(styles)
function SliderItem({data, isActive}) {
    let Color = data.color
    return ( 
        <div className={cx('slider-item', { active: isActive})}>
            <div className={cx('info')}>
                <span style={{color: Color}} className= {cx('title')}>{data.title}</span>
                <span className={cx('description')}>{data.description}</span>
                <Button primary to={data.path}>Xem chi tiết</Button>
            </div>
            <div className={cx('image')}>
                <div style={{backgroundColor: Color}} className={cx('image-shape')}></div>
                <img src={data.img} alt="" />
            </div>
        </div>
     );
}

export default SliderItem;