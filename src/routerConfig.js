// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import AsideLayout from './layouts/AsideLayout';
import Home from './pages/Home';
import List from './pages/List';
import Create from './pages/Create';
import Help from './pages/Help';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: AsideLayout,
    component: Home,
  },
  {
    path: '/List',
    layout: AsideLayout,
    component: List,
  },
  {
    path: '/Create',
    layout: AsideLayout,
    component: Create,
  },
  {
    path: '/Help',
    layout: AsideLayout,
    component: Help,
  },
  {
    path: '/Detail/:id',
    layout: AsideLayout,
    component: Detail,
  },
  {
    path: '*',
    layout: AsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
