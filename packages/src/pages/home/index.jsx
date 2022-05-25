/*
 * ArtClava Confidential
 *
 * Copyright (C) ArtClava Inc. 2022
 * The source code for this program is not published or otherwise divested
 * of its trade secrets. Unauthorized copying of this file, via any medium
 * is strictly prohibited.
 */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Checkbox, Column, Input, Radio, Select, Textarea } from 'common/simpleUiComponents/Form';

const radioOptions = [
  { name: 'Without delivery', value: 1 },
  { name: 'Paid by company', value: 2 },
  { name: 'Paid by sender', value: 3 },
  { name: 'Paid by receiver', value: 4 }
];

const Home = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);

  const handleClick = useCallback(() => setLoading(true), []);

  return (
    <div>
      <h1>H1 text example</h1>
      <h2>H2 text example</h2>
      <h3>H3 text example</h3>
      <h4>H4 text example</h4>
      <h5>H5 text example</h5>
      <h6>H6 text example</h6>
      <p>{t('text')}</p>
      <br />
      <form>
        <Column>
          <Input label="input label" name="tst1" value="kkk" />
          <Input
            disabled label="input label" name="tst1"
            value="disabled"
          />
          <Input
            label="input label" name="tst1" readOnly
            value="readonly"
          />
        </Column>
        <Input
          error="Error message" label="input label" name="tst2"
          value="kkk"
        />
        <Input icon={ { name: 'search' } } name="tst3" placeholder="Search" />
        <Input icon={ { name: 'instagram', position: 'right' } } name="tst4" placeholder="Search" />
        <Select
          icon="instagram" label="Select with icon" name="select"
          options={ radioOptions }
        />
        <Select name="select2" options={ radioOptions } />
        <Textarea label="Textarea" name="tst5" placeholder="Multiline text" />
        <Radio
          label="Radio list" name="radio" options={ radioOptions }
          value={ 4 }
        />
        <Checkbox label="Checkbox list" name="checkbox" text="Checkbox example" />
        <Button position="center" text="button text" />
        <Button
          isLoading={ loading } onClick={ handleClick } position="center"
          text="button with loading, please click"
        />
      </form>
    </div>
  );
};

export default Home;
