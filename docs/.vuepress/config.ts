import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 请不要忘记设置默认语言
  lang: 'zh-CN',
  theme: plumeTheme({
    profile: {
      name: '雪糕不甜',
      description: 'Is the ice cream sweet or not?',
      avatar: '/plume.png',
      circle: false, // 是否为圆形头像
      location: '成都',
      organization: '西北工业大学',
    },
    social: [
      { icon: 'github', link: 'https://github.com/kaxhh' },
      { icon: 'gitlab', link: 'https://gitee.com/xuxeu' },
      { icon: 'bilibili', link: 'https://github.com/kaxhh' },
      { icon: 'qq', link: '1195628909@qq.com' },
    ],
    editLinkText: '在 GitHub 上编辑此页',
    footer: {
      message: '生活记录|元元工作|早早学习',
      copyright: 'Copyright © 2024-present <a target="_blank" href="https://github.com/kaxhh/">雪糕不甜</a>'
    },
    externalLinkIcon: false as any,
  }),
  bundler: viteBundler(),
})