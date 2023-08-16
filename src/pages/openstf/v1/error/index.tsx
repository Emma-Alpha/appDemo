import React from "react";
import RequireAuth from "@src/components/RequireAuth/RequireAuth";
import Loading from "@src/components/Loading/Loading";
import styles from "./index.less";
import ManualSlavePage from "@src/components/ManualSlave/ManualSlavePage";


const ErrorPage = (props:any) => {

  return (
    <div className={styles["micro__app"]}>
      <ManualSlavePage />
    </div>
  )
}


export default RequireAuth(ErrorPage, {targetPerarr: "07"});