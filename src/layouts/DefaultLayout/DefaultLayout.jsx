import Header from "~/layouts/components/Header/Header";
import Footer from "~/layouts/components/Footer/Footer";

import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = className.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
                <div className={cx('content')}>{children}</div>
            <Footer/>

        </div>
    );
}

export default DefaultLayout;