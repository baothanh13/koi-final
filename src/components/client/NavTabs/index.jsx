import styles from "./index.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function NavTabs({navItems, children}) {

    // Hàm cuộn mượt tùy chỉnh
    const smoothScrollTo = (targetY, duration) => {
        const startY = window.scrollY;
        const difference = targetY - startY;
        const startTime = performance.now();

        const step = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Đảm bảo không vượt quá 1
            const ease = progress * (2 - progress); // Sử dụng easing

            window.scrollTo(0, startY + difference * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    // Hàm để cuộn đến phần tương ứng
    const scrollToSection = (ref) => {
        const targetY = ref.current.offsetTop;
        smoothScrollTo(targetY, 800); // Cuộn mượt trong 800ms
        //     ref.current.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className={cx("scroll-spy")}>
            {navItems && <div className={cx("nav", "nav-tabs")}>
                {navItems.map((navItem, index) => {
                    return (
                        <a key={index} onClick={() => scrollToSection(navItem.ref)}
                           className={cx("nav-link")} href={navItem.slug}>
                            {navItem.title}
                        </a>
                    );
                })}
            </div>}

            {children}
        </div>
    );
}

export default NavTabs;
