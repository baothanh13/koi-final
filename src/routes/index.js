// Pages
import Home from "../pages/client/Home";

// Private
import Infor from "../pages/client/Customer/Account/Infor";
import Account from "../pages/client/Customer/Account/Account";

// Public routes
const publicRoutes = [{ path: "/", component: Home }];

const privateRoutes = [{ path: "/account", component: Account }, { path: "/account/infor", component: Infor }];

export { publicRoutes, privateRoutes };
