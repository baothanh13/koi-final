// Pages
import Home from "../pages/client/Home";

// Private
import Infor from "../pages/client/Customer/Infor";
import ChangePassword from "../pages/client/Customer/ChangePassword";
import MyOrder from "../pages/client/Customer/MyOrder";
import CreateShipment from "../pages/client/Customer/CreateShipment";

// Public routes
const publicRoutes = [{ path: "/", component: Home }];

const privateRoutes = [
  { path: "/customer/", component: MyOrder },
  { path: "/customer/infor", component: Infor },
  { path: "/customer/change-password", component: ChangePassword },
  { path: "/customer/my-order", component: MyOrder },
  { path: "/customer/create-shipment", component: CreateShipment },
];

export { publicRoutes, privateRoutes };
