import React from 'react';

export default {
  categories: [
    {
      cardLink: '/config-sync',
      cardTitle: 'Config Sync',
      cardDescription: 'All you need to get your project up-and-running, and become a Strapi expert',
      cardImgSrc: require('@site/static/img/assets/config-sync/logo.png').default,
      linksIconSrc: require('@site/static/img/assets/icons/code.svg').default,
      linksIconColor: 'green',
    },
    {
      cardLink: '/webtools',
      cardTitle: 'Webtools',
      cardDescription: 'Get the most out of the admin panel with our user guide',
      cardImgSrc: require('@site/static/img/assets/webtools/logo.png').default,
      linksIconSrc: require('@site/static/img/assets/icons/feather.svg').default,
      linksIconColor: 'blue',
    },
  ],
};
