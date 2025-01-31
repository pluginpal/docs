---
sidebar_label: 'Included types'
displayed_sidebar: configSyncSidebar
slug: /config-sync/configuration/included-types
---

# Included types

If provided, this setting will include only the listed config types in the syncing process. The config types are specified by the `configName` of the type.

If empty or not provided, all types will be included. If a type is in both `includedTypes` and `excludedTypes`, `excludedTypes` will take presedence and the type will be excluded.

For example:

```
includedTypes: ['admin-role']
```

| Name | Details |
| ---- | ------- |
| Key | `includedTypes` |
| Required | false |
| Type | array |
| Default | `[]` |
