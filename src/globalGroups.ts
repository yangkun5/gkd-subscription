import { defineGkdGlobalGroups } from '@gkd-kit/define';

export default defineGkdGlobalGroups([
  {
    key: 0,
    name: '开屏广告-通用跳过（兜底）',
    desc: '点击所有应用开屏广告的跳过按钮。作为订阅源未覆盖的 app 的兜底规则，规则保守（只匹配短文本"跳过"类按钮），误触风险低。',
    enable: true,
    actionMaximum: 1,
    matchTime: 10000,
    actionMaximumKey: 0,
    rules: [
      {
        matches:
          '[text="跳过" || text*="跳过" && text.length<6 || text="跳 出"][visibleToUser=true]',
        action: 'clickCenter',
      },
    ],
  },
]);
