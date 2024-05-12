// import React from "react";

// const Signup = () => {
  
//   return (
//     <div className="flex items-center justify-center min-h-screen font-sans">
//       <div className="w-full max-w-2xl">
//         <h1 className="text-3xl font-bold ml-4 mb-8">
//           Sign up and start learning
//         </h1>
//         <form action="udemy.php" method="post" class="space-y-4">
          // <div className="border  px-6 border-black overflow-hidden transition-all duration-300">
          //   <label htmlFor="fullname" className="block mb-1 pt-8 font-semibold">
          //     Full name
          //   </label>
          //   <input
          //     type="text"
          //     id="fullname"
          //     name="fullname"
          //     className="w-full px-3   focus:outline-none"
          //   />
          // </div>

          // <div className=" border  px-6 border-black  overflow-hidden   ">
          //   <label htmlFor="email" className="block mb-1 pt-8  font-semibold  ">
          //     Email
          //   </label>
          //   <input
          //     type="email"
          //     id="email"
          //     name="email"
          //     className="w-full border rounded px-3  focus:outline-none"
          //   />
          // </div>
          // <div className="  border  px-6 border-black  overflow-hidden">
          //   <label
          //     htmlFor="password"
          //     className="block  pt-8  mb-1 font-semibold "
          //   >
          //     Password
          //   </label>
          //   <input
          //     type="password"
          //     id="password"
          //     name="password"
          //     className="w-full border rounded px-3 focus:outline-none "
          //   />
          // </div>

          // <div>
          //   <input
          //     type="checkbox"
          //     id="special-offers"
          //     name="special-offers"
          //     className="mr-2  ml-2 border-black"
          //   />
          //   <label className="text-2xl  font-normal" htmlFor="special-offers">
          //     Send me special offers, personalized recommendations, and learning
          //     tips
          //   </label>
          // </div>
          // <button
          //   type="submit"
          //   className="w-full bg-purple-600 text-white py-5 font-bold rounded mb-8 hover:bg-purple-700"
          // >
          //   Sign Up
          // </button>
//         </form>
    //     <div className="text-center mt-8 text-gray-800 text-lg mb-10">
    //       <p>
    //         By signing up, you agree to our Terms of use and Privacy Policy.
    //       </p>
    //     </div>
    //     <div>
    //       <hr />
    //     </div>
    //     <p className="text-center mt-4">
    //       Already have an account?{" "}
    //       <a href="/login" className="text-purple-900 font-bold underline">
    //         Log in
    //       </a>
    //     </p>
    //   </div>
    // </div>
//   );
// };
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("type", "register");

    try {
      const response = await fetch("http://localhost/PHP/PHP/emailValidate.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data && data.status === "success") {
        const insertFormData = new FormData();
        insertFormData.append("name", name);
        insertFormData.append("email", email);
        insertFormData.append("password", password);
        insertFormData.append("tableName", "Users");

        const insertResponse = await fetch(
          "http://localhost/PHP/PHP/insertTOTables.php",
          {
            method: "POST",
            body: insertFormData,
          }
        );

        const insertData = await insertResponse.json();
        console.log(insertData);
        // Optionally, you can redirect the user to a confirmation page
        navigate("/confirm");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold ml-4 mb-8">
          Sign up and start learning
        </h1>
        {error && <div className="text-red-600">{error}</div>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="border px-6 border-black overflow-hidden transition-all duration-300">
            <label htmlFor="name" className="block mb-1 pt-8 font-semibold">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={nameHandler}
              className="w-full px-3 focus:outline-none"
              required
            />
          </div>

          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="email" className="block mb-1 pt-8 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={emailHandler}
              className="w-full border rounded px-3 focus:outline-none"
              required
            />
          </div>

          <div className="border px-6 border-black overflow-hidden">
            <label htmlFor="password" className="block mb-1 pt-8 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={passwordHandler}
              className="w-full border rounded px-3 focus:outline-none"
              required
            />
          </div>

          <div>
            <input
              type="checkbox"
              id="special-offers"
              name="special-offers"
              className="mr-2 ml-2 border-black"
            />
            <label className="text-2xl font-normal" htmlFor="special-offers">
              Send me special offers, personalized recommendations, and learning
              tips
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-5 font-bold rounded mb-8 hover:bg-purple-700"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-8 text-gray-800 text-lg mb-10">
          <p>
            By signing up, you agree to our Terms of use and Privacy Policy.
          </p>
        </div>
        <div>
          <hr />
        </div>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-purple-900 font-bold underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
