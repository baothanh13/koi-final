// Pages
import Home from "../pages/client/Home";

// Private
import Infor from "../pages/client/Customer/Account/Infor";
import Account from "../pages/client/Customer/Account/Account";

// Public routes
const publicRoutes = [{ path: "/", component: Home }];

const privateRoutes = [{ path: "/account/:id", component: Account }, { path: "/account/infor/:id", component: Infor }];

export { publicRoutes, privateRoutes };
