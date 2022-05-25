/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import ICU from 'i18next-icu';
import regeneratorRuntime from 'regenerator-runtime';

export const i18nBaseConfig = {
  fallbackLng: 'en-US',
  defaultNS: 'app',
  load: 'currentOnly',
  ns: ['app'],
  interpolation: {
    escapeValue: false
  },
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindI18nStore: 'added removed',
    nsMode: 'default',
    useSuspense: false
  }
};

export const initializeI18n = async ({
  language,
  resourcesTemplateUrl
}) => {
  const i18nConfig = {
    ...i18nBaseConfig,
    lng: language,
    backend: {
      crossDomain: false,
      loadPath: resourcesTemplateUrl,
      requestOptions: {
        mode: 'cors',
        credentials: 'same-origin',
        cache: 'no-cache'
      },
      react: {
        useSuspense: true
     }
    }
  };

  
return i18n.use(initReactI18next).use(Backend).use(ICU).init(i18nConfig);
};

export default i18n;