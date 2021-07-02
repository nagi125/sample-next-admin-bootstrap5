import Layout from '../layouts/NoHeader';

/**
 * @returns {JSX.Element}
 * @constructor
 */
const LoginPage = () => {

  /**
   * @param e
   * @returns {Promise<void>}
   */
  async function handleSubmit(e) {
    e.preventDefault();
  }

  return (
      <>
        <Layout title="Login">
          <div id="login-form">
            <div className="container mt-5">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                      <form method="POST" action="">
                        <div className="form-group row mb-3">
                          <label htmlFor="email" className="col-md-4 col-form-label text-md-end">E-Mail</label>
                          <div className="col-md-6">
                            <input id="email" type="email" className="form-control" name="email" value="" required autoComplete="email" autoFocus />
                          </div>
                        </div>

                        <div className="form-group row mb-3">
                          <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>
                          <div className="col-md-6">
                            <input id="password" type="password" className="form-control" name="password" required autoComplete="current-password" />
                          </div>
                        </div>

                        <div className="form-group row mb-3">
                          <div className="col-md-6 offset-md-4">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                              <label className="form-check-label" htmlFor="remember">Remember Me</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-group row mb-0">
                          <div className="col-md-8 offset-md-4">
                            <button className="btn btn-primary">Login</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </>
  )
}

export default LoginPage;
