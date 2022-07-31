/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React, { useEffect, useState } from 'react';
import { PeopleEndpoint } from './endpoints';
import getAxiosInstance from './getAxiosInstance';

const Context = React.createContext(undefined);

export default Context;

const axiosInstance = getAxiosInstance();

const getFactory = (baseUrl) => ({
  people: PeopleEndpoint(baseUrl, 'people1'),
});

// eslint-disable-next-line react/prop-types
export const HttpClientProvider = ({ baseUrl, children }) => {
  const [currentBaseUrl, setBaseUrl] = useState(baseUrl);

  const [config, setConfig] = useState(() => getFactory(baseUrl));

  useEffect(() => {
    if (baseUrl === currentBaseUrl) {
      return;
    }

    setBaseUrl(baseUrl);
    setConfig(getFactory(baseUrl));
  }, [baseUrl, currentBaseUrl]);

  return <Context.Provider value={config}>{children}</Context.Provider>;
};
