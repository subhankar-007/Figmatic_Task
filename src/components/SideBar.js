import React from "react";
import "./SideBar.css";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  ShoppingOutlined,
  HeartOutlined,
  WechatOutlined,
  DashboardOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  UserOutlined
} from "@ant-design/icons";

const SideBar = () => {
  return (
    <div className="UpperOpt">
      <div class="sidebar">
      <div className="opt-1">
      <DashboardOutlined /> <a href="#news">DASHBOARD</a>
        </div>
        <div className="opt-1">
          <MailOutlined /> <a href="#news">KNOWLEDGE</a>
        </div>
        <div className="opt-1">
        <ShoppingOutlined /> <a href="#news">DESIGNS</a>
        </div>
        <div className="opt-1">
          <AppstoreOutlined /> <a href="#news">MEMBERS</a>
        </div>
        <div className="opt-1">
          <CalendarOutlined /> <a href="#news">TEAMS</a>
        </div>
        <div className="opt-1">
          <SettingOutlined /> <a href="#news"> VAULT</a>
        </div>
        <div className="opt-1">
        <WechatOutlined /> <a href="#news"> CHAT</a>
        </div>
        <div className="opt-1" style={{marginTop: '81rem'}}>
          <SettingOutlined /> <a href="#news"> SETTINGS</a>
        </div>
        <div className="opt-1">
        <HomeOutlined /> <a href="#news"> COMPANY</a>
        </div>
        <div className="opt-1">
        <UserOutlined /> <a href="#news">MY PROFILE</a>
        </div>
        <hr style={{color: 'whitesmoke',height: '0.1rem'}}></hr>
        <div className="pwd-by">
          Powered by @ Subhankar<HeartOutlined />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
