import React from 'react'
import { Outlet } from "react-router-dom";
import styles from "./index.less";

function layout() {
  return (
    <div className={styles["content"]}>
      <div className={styles["header"]}>
        <h2 className={styles["h2"]}>分类管理</h2>
      </div>
      <div className={styles["body"]}>
        <Outlet />
      </div>
    </div>
  )
}

export default layout