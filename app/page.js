"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import style from "./app.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let emailRef = useRef();
  let passwordRef = useRef();
  const router = useRouter();

  const onSubmit = async () => {
    const email = emailRef.value;
    const password = passwordRef.value;

    let result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      console.log(result);
      alert("Something went wrong. Please try again!");
    } else {
      router.push("/dashboard");
    }
  };
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
                  ref={(dev) => (emailRef = dev)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control input-focus-none  my-2"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  ref={(dev) => (passwordRef = dev)}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary  my-2"
                onClick={() => onSubmit()}>
                Submit
              </button>
            </form>

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
