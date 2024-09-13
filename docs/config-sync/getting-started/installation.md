---
sidebar_label: 'Installation'
displayed_sidebar: configSyncSidebar
slug: /config-sync
---

# ⏳ Installation

Install the plugin in your Strapi project.

```bash
# using yarn
yarn add strapi-plugin-config-sync

# using npm
npm install strapi-plugin-config-sync --save
```
 
Add the export path to the `watchIgnoreFiles` list in the `config/admin.js` file.
This way your app won't reload when you export the config in development.

```md title="config/admin.js"
module.exports = ({ env }) => ({
  // ...
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
```

After successful installation you have to rebuild the admin UI so it'll include this plugin. To rebuild and restart Strapi run:

```bash
# using yarn
yarn build
yarn develop

# using npm
npm run build
npm run develop
```

The **Config Sync** plugin should now appear in the **Settings** section of your Strapi app.

To start tracking your config changes you have to make the first export. This will dump all your configuration data to the `/config/sync` directory. You can export either through [the CLI](#-command-line-interface-cli) or [Strapi admin panel](#%EF%B8%8F-admin-panel-gui)

Enjoy 🎉