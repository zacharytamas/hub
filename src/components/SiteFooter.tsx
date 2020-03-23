import React from 'react';

import cn from 'classnames';

import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

interface FooterSocialLinkProps {
  href: string;
  Icon: React.FC<{className?: string}>;
  name: string;
}

const FooterSocialLink = ({href, Icon, name}: FooterSocialLinkProps) => (
  <a href={href} target="_blank" className="no-underline hover:font-normal">
    <Icon className="h-6 lg:h-5 text-gray-700" />
    <span className="hidden ml-1 lg:inline-block text-base">{name}</span>
  </a>
);

const FooterSocialLinks = () => (
  <div className="flex mb-8 items-center justify-around flex-wrap sm:flex-auto sm:mb-0">
    <FooterSocialLink
      href="https://github.com/zacharytamas"
      Icon={GitHubIcon}
      name="GitHub"
    />
    <FooterSocialLink
      href="https://twitter.com/zacharytamas"
      Icon={TwitterIcon}
      name="Twitter"
    />
    <FooterSocialLink
      href="https://www.linkedin.com/in/zacharytamas/"
      Icon={LinkedInIcon}
      name="LinkedIn"
    />
  </div>
);

export default () => (
  <footer className="site-footer mt-8 border-t-2 pt-4">
    <div className="flex flex-col sm:flex-row-reverse">
      <FooterSocialLinks />
      <div className="text-center sm:flex-auto sm:text-left">
        &copy; {new Date().getFullYear()} Zachary Jones.{' '}
        <span className="block sm:inline">All rights reserved.</span>
      </div>
    </div>
  </footer>
);
