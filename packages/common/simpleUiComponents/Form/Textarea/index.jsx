/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../Input/Input.module.scss';

const Textarea = ({
  name,
  value,
  label,
  error,
  onBlur,
  onChange,
  disabled,
  className,
  placeholder,
  ...rest
}) => {
  const { t } = useTranslation();

  const handleChange = useCallback((e) => {
    const { value } = e.target;

    onChange(value, name, e);
  }, []);

  return (
    <div className={styles.inputParent}>
      {label && (
        <label
          className={classNames('ellipsis-text', styles.label)}
          htmlFor={name}
        >
          {t(label)}
        </label>
      )}
      <textarea
        autoComplete="nope"
        className={classNames({ [styles.error]: error })}
        disabled={disabled}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={handleChange}
        {...rest}
      />
      {error && <p className={styles.errorMessage}>{t(error)}</p>}
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
