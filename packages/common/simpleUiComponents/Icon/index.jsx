/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({ name, children, className, ...rest }) => (
  <i aria-label={ name } className={ classNames('icon', `icon-${name}`, className) } { ...rest }>
    {children}
  </i>
);

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

export default Input;
