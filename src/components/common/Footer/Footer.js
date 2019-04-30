import React from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('footer')}>
    Header
  </div>
);

export default Header;
