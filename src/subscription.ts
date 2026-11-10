import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 20261110,
  name: 'YK Subscription',
  version: 0,
  author: 'yk',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/yangkun5/gkd-subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
