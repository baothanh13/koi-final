import React from "react";
import classNames from "classnames/bind"; 
import styles from "./index.module.css"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles); 

function Footer() {
  return (
    <footer className={cx("footer")}>
      <p className={cx("title-footer")}>
        Chúng tôi cam kết xóa bỏ các rào cản về thương mại điện tử xuyên biên
        giới.
      </p>
      <div className={cx("menu-footer")}>
        <div className={cx("item-footer", "address")}>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Địa chỉ</p>
            <p className={cx("content-item")}>
              〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3
            </p>
          </div>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Email</p>
            <p className={cx("content-item")}>
              Liên hệ trực tiếp CEO: chienlv@ezbuy.jp
            </p>
          </div>
        </div>
        <div className={cx("item-footer", "about-us")}>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Công ty</p>
            <Link to="/about-us" className={cx("content-item")}>
              Về chúng tôi
            </Link>
          </div>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Tài nguyên</p>
            <Link to="/blog" className={cx("content-item")}>
              Blog
            </Link>
          </div>
        </div>
        <div className={cx("item-footer", "service")}>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Dịch vụ</p>
            <Link to="/giao-hang-nhanh" className={cx("content-item")}>
              Giao hàng nhanh
            </Link>
            <Link to="/giao-hang-tiet-kiem" className={cx("content-item")}>
              Giao hàng tiết kiệm
            </Link>
          </div>
        </div>
        <div className={cx("item-footer", "ship")}>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Vận chuyển</p>
            <Link to="/giao-hang-tiet-kiem" className={cx("content-item")}>
              Theo dõi đơn hàng
            </Link>
          </div>
        </div>
      </div>
      <div className={cx("footer-contact")}>
        <div className={cx("contac-item-footer", "contact-social")}>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Kết nối với chúng tôi</p>
            <p className={cx("content-item", "text-gray")}>
              Kết nối với chúng tôi qua mạng xã hội.
            </p>
            <div className={cx("box-icon-social")}>
              <a href="https://example.com" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon size="2x" color="#4267B2" icon={faFacebook} />
              </a>
              <a href="https://example.com" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon size="2x" color="#1DA1F2" icon={faTwitter} />
              </a>
              <a href="https://example.com" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon size="2x" color="#FF0000" icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className={cx("contac-item-footer", "contact-email")}>
          <div className={cx("box-content-footer")}>
            <p className={cx("title-item")}>Đăng ký</p>
            <p className={cx("content-item", "text-gray")}>
              Không bỏ lỡ thông tin cập nhật từ chúng tôi!
            </p>
            <form className={cx("form-register-footer")}>
              <input
                type="email"
                required
                className={cx("input-submit-footer")}
                placeholder="Ví dụ: Youremail@gmail.com"
              />
              <button className={cx("btn-submit-register")} type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
      <div className={cx("copyright-footer")}>
        Ezbuy Japan 2023 - Giải pháp thương mại điện tử hàng đầu
      </div>
    </footer>
  );
}

export default Footer;
