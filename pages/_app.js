import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import NProgress from "next-nprogress/component";

import withReduxStore from "../store/with-redux-store";

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <NProgress color="#E8521C" spinner={false} />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
