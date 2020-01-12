import config from '@config';
import home from "./home";
import manage from "./manage";
import building from "./building";
import room from "./room";
import errorPage from "./error-page";

const hasDemo = config.view.hasDemo;

//项目路由
let routes = [
    ...manage,
    ...home,
    ...building,
    ...room,
    ...errorPage
  ]
;

//是否显示demo的东西
if (process.env.NODE_ENV === 'development' && hasDemo) {
  const demoRoutes = require(`$demo/router/routes`).default;
  routes = [].concat(routes, demoRoutes);
}

export default routes;