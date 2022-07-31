/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { ErrorView } from 'app/components/ErrorView';
import processEnv from 'app/utils/processEnv';
import PropTypes from 'prop-types';

const ErrorBoundary = ({ children, fallbackComponent }) => {
  if (!processEnv.BUGSNAG_KEY) {
    return children;
  }

  const fallback = fallbackComponent ?? ErrorView;

  if (!ErrorBoundary) {
    return children;
  }

  return <ErrorBoundary FallbackComponent={fallback}>{children}</ErrorBoundary>;
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  fallbackComponent: PropTypes.node,
};

export default ErrorBoundary;
