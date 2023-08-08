import React from "react";
import styles from "./Logo.less";

const Logo = () => {
  return (
    <div className={styles["title"]}>
      <a className={styles["logo"]} href="/" />
    </div>
  )
}

export default Logo