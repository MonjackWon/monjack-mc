import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'mc.monjack.cn',
  base: '/monjack-mc/', // 必须以斜杠开始和结束，与仓库名一致
  description: '1.21.10 原版生存公益服',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '世界地图', link: 'https://map.mc.monjack.cn' },
      { text: '捐助支持', link: '/donate' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '玩家指南',
          items: [
            { text: '如何进入', link: '/guide/join' },
            { text: '规则说明', link: '/guide/rules' },
            { text: '待完善...', link: '/guide/' },
          ],
        },
      ],
    },
    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024-2026 Monjack',
    },
  },
});
