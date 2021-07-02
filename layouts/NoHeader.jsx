import Head from "next/head";

const Layout = ({ children, title = 'title' }) => {
  return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <div className="container">
          {children}
        </div>
      </>
  )
}

export default Layout;