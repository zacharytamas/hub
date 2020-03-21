import React from 'react';

import { BaseLayout } from '../components/layouts';
import About from '../content/about.mdx';

const Home = () => (
  <BaseLayout>
    <div>
      <h1 className="text-blue-600">Hi, I'm Zachary.</h1>
      <About />
    </div>
  </BaseLayout>
);

export default Home;
