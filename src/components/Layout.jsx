"use client";

import store from "@/app/features/store";
import { SessionProvider } from "next-auth/react";

const { Provider } = require("react-redux");

const Layout = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>;
    </SessionProvider>
  );
};

export default Layout;
