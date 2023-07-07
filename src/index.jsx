import React from 'react'
import { createRoot } from "react-dom/client";
import { reactBridge } from "@garfish/bridge-react-v18";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Router from "./router";

export const provider = reactBridge({
  el: '#demo',
  rootComponent: Router,
  errorBoundary: (e) => <ErrorBoundary />,
});


if (!window.__GARFISH__) {
  const container = document.getElementById('demo');
  const root = createRoot(container);
  root.render(
    <Router
      basename={
        process.env.NODE_ENV === 'production' ? '/examples/subapp/react18' : '/'
      }
    />
  );
}