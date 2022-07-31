/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ErrorView.module.scss';

const ErrorView = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <h2>{t('app:error.simple')}</h2>
      <div>{t('app:error.refresh')}</div>
    </div>
  );
};

export default ErrorView;
