import React, { CSSProperties } from 'react';
import './style.scss';
import classNames from 'classnames';

export type ButtonProps = {
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  type?:
    | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info'
    | 'link'
    | 'text';
  size?: 'large' | 'medium' | 'small';
  round?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};
function Button(props: ButtonProps): JSX.Element {
  const {
    style,
    className,
    children,
    type,
    size,
    round,
    icon,
    loading,
    disabled,
    onClick,
  } = props;
  const btnClass = classNames({
    lightd_btn: true,
    [`lightd_btn_${type}`]: true,
    [`lightd_btn_${size}`]: true,
    lightd_btn_round: round,
    lightd_btn_loading: loading,
    [`lightd_btn_disabled lightd_btn_disabled_${type}`]: disabled,
    [className || '']: !!className,
  });
  const handleBtnClick = (): void => {
    if (onClick && !loading) {
      onClick();
    }
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={btnClass}
      style={style || undefined}
      disabled={disabled}
      onClick={handleBtnClick}
    >
      {loading ? (
        <span
          className={['m-icon-loading1', 'lightd_publicRotateEle'].join(' ')}
        />
      ) : null}
      {icon && !loading ? <span className={icon} /> : null}
      {children}
    </button>
  );
}
Button.defaultProps = {
  style: '',
  className: '',
  children: null,
  type: 'default',
  size: 'medium',
  round: false,
  icon: '',
  loading: false,
  disabled: false,
  onClick: () => {},
};
export default Button;
