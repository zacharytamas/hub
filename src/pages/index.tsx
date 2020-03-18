import React from 'react';

import { BaseLayout } from '../components/layouts';
import { H1 } from '../components/typography';
import About from '../content/about.mdx';

const Home = () => (
  <BaseLayout>
    <div>
      <H1>Hi, I'm Zachary.</H1>
      <About />
    </div>
  </BaseLayout>
);

export default Home;
