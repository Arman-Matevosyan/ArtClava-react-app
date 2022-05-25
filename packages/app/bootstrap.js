/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ErrorBoundary from 'app/app-structure/ErrorBoundary';
import processEnv from 'app/utils/processEnv';
import AppEntryPoint from 'app/app-structure/AppEntryPoint';
import { initializeI18n } from 'common';
import { QueryClient, QueryClientProvider } from 'react-query';
import PropTypes from 'prop-types';
import { HttpClientProvider } from '../common/http-client/HttpClientContext';

const history = createBrowserHistory();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: (failureCount, error = { response: { status } }) =>
        failureCount < 4 && error?.response?.status === 429,
      cacheTime: 0,
      retryDelay: 2000
    }
  }
});

const AppEntryPointWrapper = ({ apiGatewayUrl }) => {

  return (
    <ErrorBoundary>
      <HttpClientProvider baseUrl={ apiGatewayUrl }>
        <QueryClientProvider client={ queryClient }>
          <Router history={ history }>
            <AppEntryPoint />
          </Router>
        </QueryClientProvider>
      </HttpClientProvider>
    </ErrorBoundary>
  );
};

AppEntryPointWrapper.propTypes = {
  apiGatewayUrl: PropTypes.string
};
async function init() {
  history.listen();
  // language init

  // TODO Make Dynamic

  const language = 'en-US';
  const resourcesTemplateUrl = '/public/locales/{{lng}}/{{ns}}.json';

  await initializeI18n({ language, resourcesTemplateUrl });
  // baseURL here
  const apiGatewayUrl = 'https://swapi.dev/api/';
  
  render (
    <AppEntryPointWrapper apiGatewayUrl={ apiGatewayUrl }  />,
      document.getElementById('root')
  );
}
  // Language settings
  // Integration with react-router-dom

  if (processEnv.NODE_ENV === 'development') {
    const useMocks = false;

  }

init();
