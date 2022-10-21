import classNames from 'classnames/bind';
import styles from './Search.module.scss'

const cx = classNames.bind(styles)
function Search() {
    return ( 
        <div className={cx('search')}>
            <input 
                placeholder="Tìm kiếm sản phẩm và phụ kiện"
                spellCheck={false}
            />
            <button className={cx('search-btn')}>Tìm kiếm</button>
        </div>
     );
}

export default Search;