/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React, { lazy, Suspense } from 'react';

export default (Component) => (props) => {
  const LazyComponent = lazy(Component);

  return (
    <Suspense fallback={<div />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
