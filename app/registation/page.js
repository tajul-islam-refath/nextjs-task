import style from "./registation.module.scss";
import Link from "next/link";
import Head from "next/head";
export default function Register() {
  return (
    <>
      <Head>
        <title>Registation Page</title>
      </Head>
      <div className={style.registation}>
        <div className={style.innerContainer}>
          <div className={`rounded shadow ${style.innerBox}`}>
            <div className="text-center">
              <p className="fw-bold">
                <b>Create A New Account </b>
              </p>
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control input-focus-none my-2"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control input-focus-none my-2"
                  id="firstName"
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control input-focus-none my-2"
                  id="lastName"
                  placeholder="Enter last name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control input-focus-none  my-2"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="btn btn-primary  my-2">
                Submit
              </button>
            </form>
            {/* <div className="mt-3 alert alert-warning">
              <a className="alert-link">Did you forget your password?</a>
            </div> */}

            <div className="alert alert-warning">
              <span>Already have an account?</span>
              <Link className="alert-link" href="/">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
