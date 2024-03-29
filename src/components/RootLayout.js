import React from "react";
import NavbarModule from "../components/NavbarModule";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <NavbarModule />
      <main>
        <Outlet />
      </main>
    </Provider>
  );
};

export default RootLayout;
