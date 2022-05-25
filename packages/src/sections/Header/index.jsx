/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */

import React from 'react';
import styles from './Header.module.scss';
import useHttpClient from 'common/http-client/useHttpClient';
import { useQuery } from 'react-query';
import axios from 'axios';

const peopleFetch = async (people) => {
  const res = await axios.get(people);


  return res.data;
};

const Header = () => {
  const { people } = useHttpClient();

  const { data, status, isError, isLoading, isFetched } = useQuery('people', () => peopleFetch(people));

  console.log(data, status, isError, isLoading, isFetched, '====');

  return (
    <header className={ styles.parent }>
      <div className={ styles.content }>
        <span className={ styles.logo }>Logo</span>
        <div className={ styles.navigation } />
      </div>
    </header>
  );
};

export default Header;
