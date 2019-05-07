import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// 전달받은 clssName, onClick 등 값들이 rest 안에 들어 있음
// JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넣어 줌
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
  children, to, onClick, disabled, theme = 'defualt',
}) => {
  // to 값이 존재하면 Link 사용, 아니라면 div 사용
  // 비활성화되어 있는 버튼일 때도 div 사용
  const Element = (to && !disabled) ? Link : Div;

  return (
    <Element
      to={to}
      className={cx('button', theme, {disabled})}
      onClick={disabled ? () => null : onClick}>
      {children}
    </Element>
  )
}

export default Button;
