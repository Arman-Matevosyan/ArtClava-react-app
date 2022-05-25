/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React, { useCallback } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Icon from 'common/simpleUiComponents/Icon';

import styles from './Input.module.scss';

const Input = ({
  name,
  value,
  label,
  error,
  onBlur,
  onChange,
  className,
  placeholder,
  type = 'text',
  disableSpace = true,
  icon: { name: iconName, position: iconPosition = 'left' } = {},
  ...rest
}) => {
  const { t } = useTranslation();

  const handleKeyPress = useCallback((e) => {
    if (disableSpace && e.key === ' ') {
      e.preventDefault();
    }
  }, []);

  const handleChange = useCallback((e) => {
    const value = e.target.value;

    const validatedValue = disableSpace ? value.replace(/ /g, '') : value; // This is for ios swipe type

    onChange(validatedValue, name, e);
  }, []);

  return (
    <div
      className={ classNames(styles.inputParent, {
        [styles.withIcon]: iconName,
        [styles[`${iconPosition}Icon`]]: iconName
      }) }
    >
      {label && (
        <label className={ classNames('ellipsis-text', styles.label) } htmlFor={ name }>
          {t(label)}
        </label>
      )}
      <input
        autoComplete="nope"
        className={ classNames({ [styles.error]: error }) }
        id={ name }
        name={ name }
        onBlur={ onBlur }
        onChange={ handleChange }
        onKeyPress={ handleKeyPress }
        placeholder={ placeholder }
        type={ type }
        value={ value }
        { ...rest }
      />
      {iconName && <Icon name={ iconName } />}
      {error && <p className={ styles.errorMessage }>{t(error)}</p>}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disableSpace: PropTypes.bool,
  label: PropTypes.string,
  error: PropTypes.string,
  position: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string
  })
};

export default Input;
