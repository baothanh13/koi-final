// Pages
// Private
import Infor from "../pages/client/Customer/Infor";
import ChangePassword from "../pages/client/Customer/ChangePassword";
import MyOrder from "../pages/client/Customer/MyOrder";
import CreateShipment from "../pages/client/Customer/CreateShipment";
import ForGot from "../pages/account/ForGot";
import SignUp from "../pages/account/SignUp";

//Account
import Login from "../pages/account/Login";
import AboutUs from "../pages/client/AboutUs";
import {routerName} from "./routerName";
import CrossBorderEcommerce from "../pages/client/Services/CrossBorderEcommerce";
import CrossBorderTransportation from "pages/client/Services/CrossBorderTransportation";
import ContactSales from "pages/client/ContactSales";
import HomeBlog from "pages/client/HomeBlog";

// Public routes
const publicRoutes = [
    {path: routerName.home.slug, component: HomeBlog},
    {path: routerName.aboutUs.slug, component: AboutUs},
    {path: routerName.servicesCrossBorderEcommerce.slug, component: CrossBorderEcommerce},
    {path: routerName.servicesCrossBorderTransportation.slug, component: CrossBorderTransportation},
    {path: routerName.contactSales.slug, component: ContactSales},
];

const privateRoutes = [
    {path: "/customer/", component: MyOrder},
    {path: "/customer/infor", component: Infor},
    {path: "/customer/change-password", component: ChangePassword},
    {path: "/customer/my-order", component: MyOrder},
    {path: "/customer/create-shipment", component: CreateShipment},
    {path: "/login", component: Login},
    {path: "/forgot-password", component: ForGot},
    {path: "/sign-up", component: SignUp}
];

export {publicRoutes, privateRoutes};
