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

import styles from './Checkbox.module.scss';
import inputStyles from 'common/simpleUiComponents/Form/Input/Input.module.scss';

const Checkbox = ({ name, text, label, value, disabled, onChange, error }) => {
  const { t } = useTranslation();

  return (
    <>
      {label && <p className={ classNames('ellipsis-text', inputStyles.label) }>{t(label)}</p>}
      <label className={ styles.checkbox } htmlFor={ name }>
        <span className="text">{t(text)}</span>
        <input
          checked={ value }
          disabled={ disabled }
          id={ name }
          name={ name }
          onChange={ useCallback((e) => onChange?.(e.target.checked, name, e), []) }
          type="checkbox"
          value={ value }
        />
        <span className="checkmark">
          <i className="icon-accept" />
        </span>
        {error && <p className={ inputStyles.errorMessage }>{t(error)}</p>}
      </label>
    </>
  );
};

Checkbox.propTypes = {
  value: PropTypes.bool,
  text: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Checkbox;
