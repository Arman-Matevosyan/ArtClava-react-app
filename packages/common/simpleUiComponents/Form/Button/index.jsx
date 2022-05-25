/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from 'common/simpleUiComponents/Icon';
import styles from './Button.module.scss';

const Button = ({
  text,
  icon,
  onClick,
  disabled,
  isLoading,
  type = 'button',
  position = 'center',
  ...rest
}) => {
  return <div className={ classNames(styles.buttonBlock, styles[`${position}Position`]) }>
    <div className={ classNames(styles.buttonParent, {
      disabled: disabled,
      [styles.loading]: isLoading
    }) }
    >
      {isLoading && <Icon className={ styles.loader } name="loader" />}
      <button
        disabled={ disabled || isLoading } onClick={ onClick } type={ type }
        { ...rest }
      >
        {text}
      </button>
    </div>
  </div>;
};

Button.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  position: PropTypes.string
};

export default Button;