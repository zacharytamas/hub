import React from 'react';

export default () => (
  <footer className="site-footer mt-8 border-t-2 pt-4">
    <div className="text-center">
      &copy; {new Date().getFullYear()} Zachary Jones.{' '}
      <span className="block sm:inline">All rights reserved.</span>
    </div>
  </footer>
);
