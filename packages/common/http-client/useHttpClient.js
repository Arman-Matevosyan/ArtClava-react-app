/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import Context from './HttpClientContext';

const useHttpClient = () => {
  const httpClient = React.useContext(Context);

  if (!httpClient) {
    throw new Error('The Http Client was not initialized.');
  }

  return httpClient;
};

export default useHttpClient;
