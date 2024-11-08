import styles from "./index.module.css";
import classNames from "classnames/bind";
import BannerTop from "../BannerTop";
import Header from "../Header";
import Footer from "../Footer";

const cx = classNames.bind(styles);

function MainLayout({title, breadcrumbs, children}) {
    return (
        <>
            <Header/>
            <BannerTop title={title} breadcrumbs={breadcrumbs}/>
            {children}
            <Footer/>
        </>
    );
}

export default MainLayout;
