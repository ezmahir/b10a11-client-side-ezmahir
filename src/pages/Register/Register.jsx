import React, { useContext } from "react";
import registration_lottie from "../../assets/registration_lottie.json";
import Lottie from "lottie-react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Your Password is invalid to use");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(
          result.user &&
            updateUserProfile({ displayName: name, photoURL: photo })
        );

        e.target.reset();
        const newUser = { photo, email };
        fetch(
          "https://historical-artifacts-tracker-server-teal.vercel.app/users",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("User Created to db", data);
            if (data.insertedId) {
              Swal.fire({
                title: "Done!",
                text: "User was created!!",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });

        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={registration_lottie}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Your Photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <p>
                Old User here? If yes, do{" "}
                <span className="text-blue-500 underline">
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
