/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import i18n from '../../utils/i18n';
import tokenInterceptor from './tokenInterceptor';

export const showUserActionDanger = (message, title) => {

// Trigger generic error
const getFieldName = ({ name }) => name.substring(name.lastIndexOf('.') + 1);

const showError = (
  data = {
        message: message,
        code: code,
        fields: { name: name, description: description }
      }
) => {
  if (typeof data === 'string') {
    showUserActionDanger(data || i18n.t('app:error.generic'));

    return;
  }

  const { message, fields, code } = data;

  let errorTitle = null;

  let errorMessage = message;

  if (
    code !== undefined &&
    !Number.isNaN(code) &&
    i18n.exists(`errors.codes.${code}`)
  ) {
    // Provide i18n for the returned error code
    errorMessage = i18n.t(`app:error.codes.${code}`);
  } else if (fields && fields.length) {
    errorTitle = message;
    errorMessage = fields.reduce(
      (acc, field, index, arr) =>
        `${acc}${getFieldName(field)} ${field.description}${
          index < arr.length - 1 ? ' | ' : ''
        }`,
      ''
    );
  }

  showUserActionDanger(errorMessage, errorTitle);
};
};

const showDefaultError = () =>
  showUserActionDanger(i18n.t('app:error.generic'));

/* eslint no-underscore-dangle: 0 */
function createHttpErrorsInterceptor(axios) {
  return async function httpErrorsInterceptor(error) {
    const { response } = error;

    if (error?.config?.__ignoreErrors) {
      return Promise.resolve(response);
    }

    const ignoreCodes = error?.config?.__ignoreCodes;

    if (Array.isArray(ignoreCodes) && ignoreCodes?.includes(response?.status)) {
      return Promise.reject(error);
    }

    if (response) {
      if (
        response.status === 401 &&
        error.config &&
        !error.config.__isRetryRequest
      ) {
        let originalRequest = error.config;

        const newTokenConfig = await tokenInterceptor(originalRequest);

        if (newTokenConfig) {
          originalRequest = {
            ...originalRequest,
            ...newTokenConfig
          };
        }

        // retry the original request
        originalRequest.__isRetryRequest = true;

        return axios(originalRequest);
      }
      const { data } = response;

      showError(data);
    } else {
      showDefaultError();
    }

    return Promise.reject(error);
  };
}

export default createHttpErrorsInterceptor;
