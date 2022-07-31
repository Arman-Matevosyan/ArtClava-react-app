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
import inputStyles from 'common/simpleUiComponents/Form/Input/Input.module.scss';
import Icon from 'common/simpleUiComponents/Icon';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = ({
  name,
  icon,
  value,
  label,
  error,
  options,
  onChange,
  disabled,
  optionSelectValueKey = 'value',
  ...rest
}) => {
  const { t } = useTranslation();

  const handleChange = useCallback((event) => {
    const { value, name } = event.target;

    onChange(value, name);
  }, []); // eslint-disable-line

  return (
    <div
      className={classNames(inputStyles.inputParent, styles.selectStyles, {
        [styles.withIcon]: icon,
      })}
    >
      <Icon className="arrow" name="arrow-down" />
      {label && (
        <label className={classNames('ellipsis-text', inputStyles.label)}>
          {t(label)}
        </label>
      )}
      <select
        disabled={disabled}
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map(({ name, [optionSelectValueKey]: value, label }) => (
          <option key={`${name}${value}`} value={value}>
            {t(label || name)}
          </option>
        ))}
      </select>
      {icon && <Icon className="customIcon" name={icon} />}
      {error && <p className={inputStyles.errorMessage}>{t(error)}</p>}
    </div>
  );
};

Select.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  optionSelectValueKey: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Select;
