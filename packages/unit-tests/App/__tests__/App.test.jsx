/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/appp';

test('Renders correctly', () => {
  const root = document.createElement('div');

  ReactDOM.render(<App />, root);
  expect(root.querySelector('p').textContent).toBe('TEXT');
});
