---
sidebar_label: 'Included config'
displayed_sidebar: configSyncSidebar
slug: /config-sync/configuration/included-config
---

# Included config

If provided, this setting will include only the listed configs in the syncing process. This setting expects the config names to comply with the naming convention.

If empty or not provided, all configs will be included (except those which are excluded by default). If a config is in both `includedConfig` and `excludedConfig`, `excludedConfig` will take presedence and the config will be excluded from the sync.

| Name | Details |
| ---- | ------- |
| Key | `includedConfig` |
| Required | false |
| Type | array |
| Default | `[]` |