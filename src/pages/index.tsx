import React from 'react';

import {BaseLayout} from '../components/layouts';
import SiteFooter from '../components/SiteFooter';

const Home = () => (
  <BaseLayout>
    <div style={{marginTop: '5rem'}}>
      <h1 style={{fontSize: '3rem'}}>Hi, I'm Zachary.</h1>
      <p>I'm a software craftsman living in Atlanta, Georgia.</p>
      <p>I'm married to Her Highness Supreme Squirrel.</p>
      <p>I have twin boys, Sullivan and Finley, and a Boston Terrier that I blame my farts on.</p>
      <SiteFooter />
    </div>
  </BaseLayout>
);

export default Home;
