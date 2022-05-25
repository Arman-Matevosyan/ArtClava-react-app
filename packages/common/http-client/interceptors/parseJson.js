/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */

import { AxiosRequestConfig } from 'axios';

async function parseJSON(config) {
  if (!config || !config.data || typeof config.data !== 'string') {
    return config;
  }

  try {
    return { ...config, data: JSON.parse(config?.data) };
  } catch (error) {
    return config;
  }
}

export default parseJSON;
