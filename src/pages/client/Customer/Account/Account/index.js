import React from "react";
import Layout from "../../../../../components/client/Customer/Layout";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Account() {
  const { id } = useParams();
  const [fullName, setFullName] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Token is missing");
          return;
        }

        const response = await fetch("http://localhost:8081/api/v1/user/info", {
          method: "GET",
          headers: {
            accept: "*/*",
            Authorization: "Bearer " + token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFullName(data.fullName);
          setFormData({
            fullName: data.fullName,
            dob: data.dob,
            phone: data.phone,
          });
        } else {
          console.error("Error fetching user info");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchUserInfo();
  }, []);

  // Hàm xử lý thay đổi giá trị form
  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm xử lý submit form và bắn API POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    // try {
    //   const token = localStorage.getItem('authToken');
    //   if (!token) {
    //     console.error('Token is missing');
    //     return;
    //   }

    //   const response = await fetch('http://localhost:8081/api/v1/user/update-info', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer ' + token
    //     },
    //     body: JSON.stringify(formData)
    //   });

    //   if (response.ok) {
    //     console.log('Cập nhật thông tin thành công');
    //   } else {
    //     console.error('Lỗi khi cập nhật thông tin');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
    <Layout fullName={fullName} id={id}>
      <div>
        <p>Form Thay đổi thông tin</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Cập nhật thông tin</button>
        </form>
      </div>
    </Layout>
  );
}

export default Account;
