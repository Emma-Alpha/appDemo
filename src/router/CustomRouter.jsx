import React from "react";
import { Router } from "react-router-dom";


const CustomRouter = ({
  basename,
  children,
  history,
}) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });

  React.useEffect(() => history.listen(setState), [history]);


  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigatorType={state.action}
      navigator={history}
    />
  );
}

export default CustomRouter;