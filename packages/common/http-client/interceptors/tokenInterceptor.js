/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */

async function tokenInterceptor(config) {
  try {
    const accessToken = 'token';
    const { apiGatewayUrl } = 'api';

    if (accessToken) {
      return {
        ...config,
        baseURL: apiGatewayUrl,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      };
    }

    return config;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`ERROR fetching accessToken: ${error}`);

    return null;
  }
}

export default tokenInterceptor;
