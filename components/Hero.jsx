import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className=" my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Unstoppable Domains + Auth0
    </h1>

    <p className="lead" data-testid="hero-lead">
      This is a sample application that demonstrates the <a href="https://marketplace.auth0.com/integrations/unstoppable-domains">Unstoppable Domains social connection</a>{' '}
      for Auth0, using <a href="https://nextjs.org">Next.js</a>. The <a href="https://github.com/unstoppabledomains/uauth-auth0-sample-dapp">source code</a> for this live demo is available to show how to quickly bootstrap your app with Web3 identity.
    </p>
  </div>
);

export default Hero;
