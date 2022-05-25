/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */

import { stringify, parse } from 'qs';

/**
 * Author: anthony.leal@talkdesk.com
 *
 * TODO - Waiting for resolution of https://github.com/OpenAPITools/openapi-generator/issues/7973
 *
 * This is a workaround for now -
 *  with the api generator, some of our api-docs are wrongly defined
 *  our API's expect ?array=1&array=2 but the generated functions parse
 *  our parameters as ?array=1,2. This happens before axios config `paramsSerializer`
 *  therefore we need an interceptor to transform the params back to ?array=1&array=2
 */
export default (config) => {
  const params = config.url?.split('?');

  if (!params || !params.length) {
    return config;
  }

  const paramsObj = parse(params[1]);

  const parsed = Object.fromEntries(
    Object.entries(paramsObj).map(([key, value]) => {
      if (String(value).includes(',')) {
        return [key, String(value).split(',')];
      }

      return [key, value];
    })
  );

  return {
    ...config,
    url: `${params[0]}?${stringify(parsed, { arrayFormat: 'repeat' })}`
  };
};
