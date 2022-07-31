/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from 'app/components/NotFound/NotFound';
import routes from 'app/utils/routes';
import Home from 'pages/home';
import Footer from 'sections/Footer';
import Header from 'sections/Header';

import 'common/assets/style.scss';

// const App = WithLazyLoading(() => import(/* webpackChunkName: "App" */ 'pages/Home'));

const PageAreaContainer = () => (
  <>
    <Header />
    <main>
      <Switch>
        {/* <Redirect from={routes.home} to={routes.home.toString()} exact /> */}
        <Route exact component={Home} path={routes.home} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </>
);

export default PageAreaContainer;
