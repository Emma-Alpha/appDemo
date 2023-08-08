import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Card, Spin } from "antd";
import useGlobalStore from "@store/global"
import LogoPng from "@config/public/logo.png";
import FootLogoPng from "@config/public/logo_foot.png";
import { useSize } from "ahooks";
import styles from "./layout.less";



const Header = () => {
  return (
    <div className={styles["auth__header"]}>
      <div className="flex">
        <img src={LogoPng} className="h-9 w-9" />
        <h2 className="ml-3 text-3xl font-semibold mt-0 mb-0">蓝信系统</h2>
      </div>
    </div>
  )
}


const Container = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["leftBanner"]} />
      <div>
        <Card className={`${styles["cardHasTab"]} ${styles["loginCard"]}`} bodyStyle={{ padding: 0 }}>
          <Outlet />
        </Card>
      </div>
    </div>
  )
}


const Footer = () => {

  const year = useGlobalStore((state) => state.year)

  return (
    <div className={styles["footer"]}>
      <div className={styles["beian"]}>
        <div className={styles["text"]}>
          <span>Copyright © {year.s} - {year.e} 4399.com All Rights Reserved. 四三九九网络股份有限公司 版权所有</span>
        </div>
        <div className={styles["below"]}>
          由
          <img className={styles["images"]} src={FootLogoPng} />
          提供技术支持
        </div>
      </div>
    </div>
  )
}

const MobileHeader = () => {
  return (
    <div className={styles["auth__header"]}>
      <div className={styles["mobileLogo"]}>
        <img src={LogoPng} className="h-9 w-9" />
        <h2 className="ml-3 text-3xl font-semibold mt-0 mb-0">蓝信系统</h2>
      </div>
    </div>
  )
}

const MobileContainer = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["modules"]}>
        <div className={styles["loginCardInMobile"]}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

const AuthLayout = () => {
  const setLayout = useGlobalStore(state => state.setLayout)
  const size = useSize(() => window.document.body)

  useEffect(() => {
    setLayout({
      renderSider: false,
      renderFooter: false,
      renderHeader: false,
    })

    return () => {
      setLayout({
        renderSider: true,
        renderFooter: false,
        renderHeader: true,
      })
    }
  }, [])
  return (
    typeof size?.width === "number" && size?.width <= 500 ? (
      <div className={styles["layoutNewInMobile"]}>
        <MobileHeader />
        <MobileContainer />
      </div>
    ) : (
      <div className={styles["layoutNew"]}>
        <Header />
        <Container />
        <Footer />
      </div >
    )
  )
}

export default AuthLayout;