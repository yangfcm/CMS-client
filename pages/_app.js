import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import NProgress from "next-nprogress/component";
import withRedux from "next-redux-wrapper";

import configStore from "../store";
// import withReduxStore from "../store/with-redux-store";

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <NProgress color="#E8521C" spinner={false} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(configStore)(MyApp);
