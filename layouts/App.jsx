import Head from "next/head";
import Header from "../components/_layouts/Header";
import SideBar from "../components/_layouts/SideBar";
import {useEffect} from "react";

const Layout = ({ children, title = 'title' }) => {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return (
      <>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <body>
        <div id="app">
          <Header/>
          <div className="container-fluid p-0">
            <SideBar/>
            <main role="main" className="main-box">
              <div className="content-box container-fluid">
                <h1 className="h4 mb-3 pb-3 border-bottom">{title}</h1>
                {children}
              </div>
            </main>
          </div>
        </div>
        </body>
      </>
  );
};

export default Layout;