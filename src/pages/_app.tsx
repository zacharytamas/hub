import '../style/index.scss';

import App from 'next/app';
import Router from 'next/router';

import { pageview } from '../utils/gtag';

Router.events.on('routeChangeComplete', url => pageview(url));

export default App;
