/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import axios from 'axios';
import applyConverters from 'axios-case-converter';
import parseJSON from './interceptors/parseJson';
import createHttpErrorsInterceptor from './interceptors/httpErrorsInterceptor';
import tokenInterceptor from './interceptors/tokenInterceptor';
import paramsArrayInterceptor from './interceptors/paramsArrayInterceptor';

export default () => {
  const axiosInstance = axios.create({
    timeout: 10000
  });

  axiosInstance.interceptors.request.use(tokenInterceptor);
  axiosInstance.interceptors.request.use(parseJSON);
  axiosInstance.interceptors.request.use(paramsArrayInterceptor);

  applyConverters(axiosInstance);
  axiosInstance.interceptors.response.use(
    undefined,
    createHttpErrorsInterceptor(axiosInstance)
  );

  return axiosInstance;
};
