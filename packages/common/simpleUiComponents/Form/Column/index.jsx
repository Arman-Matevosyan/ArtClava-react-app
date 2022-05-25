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

import styles from '../Input/Input.module.scss';

const Column = ({ children }) => {
  return <div className={ styles.columnStyles }>{children}</div>;
};

Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default Column;
