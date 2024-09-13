---
sidebar_label: 'CLI'
displayed_sidebar: configSyncSidebar
slug: /config-sync/cli
---

# 🔌 Command line interface (CLI)

Add the `config-sync` command as a script to the `package.json` of your Strapi project:

```
"scripts": {
  // ...
  "cs": "config-sync"
},
```

You can now run all the `config-sync` commands like this:

```bash
# using yarn
yarn cs --help

# using npm
npm run cs --help
```

## ⬆️ Import ⬇️ Export

> _Command:_ `import` _Alias:_ `i`
> 
> _Command:_ `export` _Alias:_ `e`

These commands are used to sync the config in your Strapi project. 

_Example:_

```bash
# using yarn
yarn cs import
yarn cs export

# using npm
npm run cs import
npm run cs export
```

### Flag: `-y`, `--yes`

Use this flag to skip the confirm prompt and go straight to syncing the config.

```bash
[command] --yes
```

### Flag: `-t`, `--type`

Use this flag to specify the type of config you want to sync.

```bash
[command] --type user-role
```

### Flag: `-p`, `--partial`

Use this flag to sync a specific set of configs by giving the CLI a comma-separated string of config names.

```bash
[command] --partial user-role.public,i18n-locale.en
```

### Flag: `-f`, `--force`

If you're using the soft setting to gracefully import config, you can use this flag to ignore the setting for the current command and forcefully import all changes anyway.

```bash
[command] --force
```

## ↔️ Diff

> _Command:_ `diff` | _Alias:_ `d`

This command is used to see the difference between the config as found in the sync directory, and the config as found in the database.

_Example:_

```bash
# using yarn
yarn cs diff

# using npm
npm run cs diff
```

### Argument: `<single>`

Add a single config name as the argument of the `diff` command to see the difference of that single file in a git-style diff viewer.

_Example:_

```bash
# using yarn
yarn cs diff user-role.public

# using npm
npm run cs diff user-role.public
```
