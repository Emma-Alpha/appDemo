import React, { useEffect, useMemo, useRef, useState } from "react";
import { Menu as AntdMenu, ConfigProvider } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import useGlobalStore from "@store/global";
import _ from "lodash-es";
import styles from "./Menu.less";
import Garfish from "garfish";


const Menu = () => {
  const apps = Object.values(Garfish.appInfos)
  const location = useLocation();
  const navigate = useNavigate();
  const navCode = useGlobalStore(state => state.navCode);
  const {
    microActiveApps
  } = useGlobalStore();
  const modulesFilter = apps.filter(o => o?.props?.renderInHeaderMenu !== false && navCode.includes(o?.props?.perarr))

  const [menuSelectKeys, setMenuSelectKeys] = useState([]);
  const menuItems = useMemo(() => {
    return modulesFilter.map(o => ({
      label: o?.props?.cname,
      key: o?.props?.key,
      ...o,
    }))
  }, [modulesFilter])

  useEffect(() => {
    setMenuSelectKeys(microActiveApps.map(o => o.name))
  }, [microActiveApps])

  const handleSelect = ({ item, selectedKeys }) => {
    setMenuSelectKeys(selectedKeys)
    navigate(item?.props?.activeWhen ?? "/")
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#0e79c6"
        },
        components: {
          Menu: {
            itemColor: "#fff",
            itemHoverColor: "#fff",
            horizontalItemSelectedColor: "#fff",
            horizontalItemSelectedBg: "rgb(11, 92, 150)"
          }
        }
      }}
    >
      <AntdMenu
        mode="horizontal"
        items={menuItems}
        className={styles["rich__menu"]}
        selectedKeys={menuSelectKeys}
        onSelect={handleSelect}
      />
    </ConfigProvider>
  )
}


export default Menu;