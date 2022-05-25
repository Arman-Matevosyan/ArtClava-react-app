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

import styles from './Radio.module.scss';
import inputStyles from '../Input/Input.module.scss';

const Radio = ({ label, name, options, onChange, value, error }) => {
  const { t } = useTranslation();

  const handleChange = (value) => onChange?.(value, name);

  return (
    <div className={ styles.radioParent }>
      {label && <p className={ classNames('ellipsis-text', inputStyles.label) }>{t(label)}</p>}
      <div className={ styles.items }>
        {options.map((option) => {
          const { name: optionName, disabled, value: optionValue } = option;

          return (
            <label className={ styles.radio } key={ optionValue }>
              <span className="text">{t(optionName)}</span>
              <input
                checked={ optionValue === value }
                disabled={ disabled }
                id={ optionValue }
                key={ optionName }
                name={ name }
                onChange={ useCallback(() => handleChange(optionValue), []) }
                type="radio"
              />
              <div className="checkmark">
                <i className="check" />
              </div>
            </label>
          );
        })}
      </div>
      {error && <p className={ styles.errorMessage }>{t(error)}</p>}
    </div>
  );
};

Radio.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  error: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired
};

export default Radio;
