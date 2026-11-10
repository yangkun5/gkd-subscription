import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      desc: '点击开屏广告的跳过按钮。选择器为通用匹配，建议导出快照后按实际控件特征校准。',
      rules: [
        {
          matches:
            '[vid$="skip" || vid$="jump" || text*="跳过"][text.length<10]',
        },
      ],
    },
  ],
});
