import React from 'react';

import { TitleText } from '../components/TitleText/TitleText';
import { AppHeader } from '../components/TitleText/AppHeader/AppHeader';
import { CheckContent } from '../components/TitleText/CheckContent/CheckContent';

const IndexPage = () => (
  <>
    <TitleText />
    <AppHeader />
    <CheckContent />
  </>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
