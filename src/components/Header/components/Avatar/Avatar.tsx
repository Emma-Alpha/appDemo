import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon, { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar as AntdAvatar, Dropdown } from "antd";
import useGlobalStore from "@store/global";
import useAuthStore from "@store/auth";
import DefaultAvatarPng from "@config/public/default_handsome.jpg"
import styles from "./Avatar.less";

const Avatar = () => {

  const currentUser = useGlobalStore(state => state.currentUser)
  const logout = useAuthStore(state => state.logout)
  const navigate = useNavigate()

  const renderDropDown = (e: any) => {
    return (
      <div
        className={styles["headerAvatar__dropDown"]}
        style={{
          backgroundColor: "#fff",
          color: "rgba(0,0,0,0.88)",
        }}
      >
        <div className={styles["dropdown__avatar"]}>
          <div className={styles["body"]}>
            <img src={DefaultAvatarPng} style={{ width: 38, height: 38, borderRadius: "50%" }} />
            <div className={styles["userInfo"]}>
              <div className={styles["dropdown__title"]}>{currentUser?.cname}</div>
              <div className={styles["info"]}>{`工号：${currentUser?.name}`}</div>
            </div>
          </div>
        </div>
        {React.cloneElement(e, {
          style: { boxShadow: "none", backgroundColor: "#fff", color: "rgba(0,0,0,0.88)" }
        })}
      </div>
    )
  }

  const quit = () => {
    logout().then(() => navigate("/auth", { replace: true }))
  }

  return (
    <Dropdown
      className="avatarDropDown"
      menu={{
        items: [
          {
            key: "1",
            type: 'divider',
          },
          {
            key: 'account',
            label: (
              <Link to={"/cam/profile"}>
                个人设置
              </Link>
            ),
            icon: <UserOutlined />
          },
          {
            type: "divider"
          },
          {
            key: "quit",
            label: <div onClick={quit}>退出</div>,
            icon: <LogoutOutlined />
          }
        ]
      }}
      dropdownRender={renderDropDown}
    >
      <div className={styles["avatar"]}>
        <div className={styles["content"]}>
          <div className={styles["left"]}>
            <div className={styles["detail"]}>
              {currentUser?.cname}
            </div>
            <div className={styles["info"]}>
              {currentUser?.name}
            </div>
          </div>
          <div className={styles["right"]}>
            <AntdAvatar src={DefaultAvatarPng} />
          </div>
        </div>
      </div>
    </Dropdown>
  )
}

export default Avatar;