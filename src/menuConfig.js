// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  {
    name: '帮助&反馈',
    path: 'https://github.com/kun368/NasVeritas/issues/new',
    external: true,
    newWindow: true,
    icon: 'message',
  },
  {
    name: '联系开发者',
    path: 'http://www.zzkun.com',
    external: true,
    newWindow: true,
    icon: 'yonghu',
  },
  {
    name: '下载Chrome扩展',
    path: 'https://github.com/ChengOrangeJu/WebExtensionWallet',
    external: true,
    newWindow: true,
    icon: 'key',
  },
  {
    name: '下载手机钱包',
    path: 'https://nano.nebulas.io/index_cn.html',
    external: true,
    newWindow: true,
    icon: 'phone',
  },
];

// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  {
    name: '首页',
    path: '/',
    icon: 'home',
  },
  {
    name: '真相/谣言市场',
    path: '/List',
    icon: 'shop',
  },
  {
    name: '爆料真相/辟谣',
    path: '/Create',
    icon: 'quote2',
  },
  {
    name: '使用帮助',
    path: '/Help',
    icon: 'creative',
  },
];

export { headerMenuConfig, asideMenuConfig };
