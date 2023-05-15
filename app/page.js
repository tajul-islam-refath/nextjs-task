import style from "./app.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className={style.login}>
        <div className={style.innerContainer}>
          <div className={`rounded shadow ${style.innerBox}`}>
            <div className="text-center">
              <p className="fw-bold">
                <b>WELCOME ADMIN </b>
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
              <span>You don't have an account yet?</span>
              <Link className="alert-link" href="/registation">
                Register a new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
