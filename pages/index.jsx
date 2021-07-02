import React from "react";
import Layout from "../layouts/App";

const Home = () => {
  return (
      <>
        <Layout title="サンプル">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Dashboard</div>
                <div className="card-body">You are logged in!</div>
              </div>
            </div>
          </div>
        </Layout>
      </>
  );
};

export default Home;