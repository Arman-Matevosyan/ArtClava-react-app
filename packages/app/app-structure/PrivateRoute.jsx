/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  hasAccess = false,
  exact = false,
  path = '',
}) => {
  const target = hasAccess ? Component : Unauthorized;

  return <Route component={target} exact={exact} path={path} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.node,
  hasAccess: PropTypes.bool,
  exact: PropTypes.bool,
  path: PropTypes.string,
};

export default PrivateRoute;
