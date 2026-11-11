import { defineGkdApp } from '@gkd-kit/define';

/**
 * 规则来源：甘霖 GKD 订阅 v72（github.com/ganlinte/GKD-subscription）
 * 吸纳原因：该 app 仅甘霖一个源覆盖，而甘霖自 2026-09 起停更，规则无人维护。
 * 若后续上游恢复更新，以线上版本为准。
 */
export default defineGkdApp({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告跳过按钮',
      order: -10,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      fastQuery: true,
      rules: [
        {
          matches:
            '@View[clickable=true] <2 [id="com.antfortune.wealth:id/welcome_page"]',
          action: 'clickCenter',
        },
      ],
    },
  ],
});
