import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <p className="title-footer">
        Chúng tôi cam kết xóa bỏ các rào cản về thương mại điện tử xuyên biên
        giới.
      </p>
      <div className="menu-footer">
        <div className="item-footer address">
          <div className="box-content-footer">
            <p className="title-item">Địa chỉ</p>
            <p className="content-item">
              〒136-0075 Tokyo, Koto, Shinsuna, 3 Chome−10−8, 1F Warehouse 3
            </p>
          </div>
          <div className="box-content-footer">
            <p className="title-item">Email</p>
            <p className="content-item">
              Liên hệ trực tiếp CEO: chienlv@ezbuy.jp
            </p>
          </div>
        </div>
        <div className="item-footer about-us">
          <div className="box-content-footer">
            <p className="title-item">Công ty</p>
            <Link to="/about-us" className="content-item">
              Về chúng tôi
            </Link>
          </div>
          <div className="box-content-footer">
            <p className="title-item">Tài nguyên</p>
            <Link to="/blog" className="content-item">
              Blog
            </Link>
          </div>
        </div>
        <div className="item-footer service">
          <div className="box-content-footer">
            <p className="title-item">Dịch vụ</p>
            <Link to="/giao-hang-nhanh" className="content-item">
              Giao hàng nhanh
            </Link>
            <Link to="/giao-hang-tiet-kiem" className="content-item">
              Giao hàng tiết kiệm
            </Link>
          </div>
        </div>
        <div className="item-footer ship">
          <div className="box-content-footer">
            <p className="title-item">Vận chuyển</p>
            <Link to="/giao-hang-tiet-kiem" className="content-item">
              Theo dõi đơn hàng
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <div className="contac-item-footer contact-social">
          <div className="box-content-footer">
            <p className="title-item">Kết nối với chúng tôi</p>
            <p className="content-item text-gray">
              Kết nối với chúng tôi qua mạng xã hội.
            </p>
            <div className="box-icon-social">
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
        <div className="contac-item-footer contact-email">
          <div className="box-content-footer">
            <p className="title-item">Đăng ký</p>
            <p className="content-item text-gray">
              Không bỏ lỡ thông tin cập nhật từ chúng tôi!
            </p>
            <form className="form-register-footer">
              <input
                type="email"
                required
                className="input-submit-footer"
                placeholder="Ví dụ: Youremail@gmail.com"
              />
              <button className="btn-submit-register" type="submit">Đăng ký</button>
            </form>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        Ezbuy Japan 2023 - Giải pháp thương mại điện tử hàng đầu
      </div>
    </footer>
  );
}

export default Footer;
