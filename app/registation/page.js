"use client";

import style from "./registation.module.scss";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";
export default function Register() {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  const router = useRouter();

  const onSubmit = async () => {
    let data = {
      email: emailRef.value,
      firstName: firstNameRef.value,
      lastName: lastNameRef.value,
      mobile: mobileRef.value,
      password: passwordRef.value,
      photo: "",
    };

    const response = await fetch(
      "http://localhost:5000/api/v1/user/registration",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      }
    );

    let result = await response.json();

    if (result.success === false) {
      alert("Something went wrong. Please try again");
    } else {
      router.push("/");
    }
  };

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
                  ref={(div) => (emailRef = div)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control input-focus-none my-2"
                  id="firstName"
                  placeholder="Enter first name"
                  ref={(div) => (firstNameRef = div)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control input-focus-none my-2"
                  id="lastName"
                  placeholder="Enter last name"
                  ref={(div) => (lastNameRef = div)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Last Name</label>
                <input
                  type="text"
                  className="form-control input-focus-none my-2"
                  id="mobile"
                  placeholder="X000000000"
                  ref={(div) => (mobileRef = div)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control input-focus-none  my-2"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  ref={(div) => (passwordRef = div)}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary  my-2"
                onClick={() => onSubmit()}>
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
