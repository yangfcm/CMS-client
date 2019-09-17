import Head from "next/head";

const Header = props => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
      <link rel="shortcut icon" href="/static/logo.png" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
  );
};

export default Header;
