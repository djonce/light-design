import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

export type InputProps = {
  type?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  showPassword?: boolean;
  maxlength?: number;
  minlength?: number;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  onchange?: (value: string, event: any) => void;
};

const Input: React.FC = (props: InputProps) => {
  const [value, setValue] = useState('');
  const [showClear, setShowClear] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const {
    type,
    placeholder,
    className,
    disabled,
    readOnly,
    clearable,
    maxlength,
    minlength,
    prefix,
    suffix,
    showPassword,
    onchange,
  } = props;
  const InputClass = classNames({
    'lightd-input': true,
    [className || '']: !!className,
    'lightd-input-affix': prefix,
    'lightd-input-disabled': disabled,
  });

  const changeClearState = (state: boolean): void => {
    if (value) {
      setShowClear(state);
    }
  };

  const clearText = (): void => {
    setValue('');
    setShowClear(false);
  };

  const onInput = ($event: any) => {
    const inputValue = $event.target.value;
    if (inputValue) {
      setShowClear(true);
    } else {
      setShowClear(false);
    }
    setValue(inputValue);
  };

  const change = ($event: any) => {
    if (typeof onchange === 'function') {
      if (onchange) {
        onchange($event.target.value, $event);
      }
    } else {
      throw new Error(
        "'onchange' is expected a function,but now it is not a function,Please check it!"
      );
    }
  };

  const onPressEnter = ($event: any) => {
    if ($event.which === 13 || $event.keyCode === 13) {
      change($event);
    }
  };

  const changePasswordVisible = (state: boolean): void => {
    setPasswordVisible(state);
  };

  const viewIcon = (
    <span
      className="lightd-input_suffix"
      onClick={() => changePasswordVisible(false)}
    >
      <i className="m-icon-browse" />
    </span>
  );

  const clearIcon = (
    <span className="lightd-input_suffix" onClick={clearText}>
      <i className="m-icon-error" />
    </span>
  );

  const prefixIcon = <span className="lightd-input_prefix">{prefix}</span>;
  const suffixIcon = <span className="lightd-input_suffix">{suffix}</span>;

  const cantviewIcon = (
    <span
      className="lightd-input_suffix"
      onClick={() => changePasswordVisible(true)}
    >
      <i className="m-icon-hide" />
    </span>
  );

  let IconFix: string | React.ReactNode = '';
  if (showPassword) {
    IconFix = viewIcon;
  } else if (clearable && showClear) {
    IconFix = clearIcon;
  } else if (suffixIcon) {
    IconFix = suffixIcon;
  } else {
    IconFix = '';
  }

  return (
    <span
      className={InputClass}
      onMouseOver={() => changeClearState(true)}
      onMouseOut={() => changeClearState(false)}
      onFocus={() => 0}
      onBlur={() => 0}
    >
      {prefix ? prefixIcon : ''}
      <input
        maxLength={maxlength}
        minLength={minlength}
        className="lightd-input_inner"
        // eslint-disable-next-line no-nested-ternary
        type={showPassword ? (passwordVisible ? 'text' : 'password') : type}
        onChange={change}
        onInput={onInput}
        onKeyDown={onPressEnter}
        value={value}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
      />
      {showPassword ? (passwordVisible ? viewIcon : cantviewIcon) : IconFix}
    </span>
  );
};
Input.defaultProps = {
  type: 'text',
  className: '',
  placeholder: '请输入',
  disabled: false,
  readOnly: false,
  clearable: false,
  showPassword: false,
  maxlength: 100000,
  minlength: 0,
  prefix: '',
  suffix: '',
  onchange: () => {},
};
export default Input;
