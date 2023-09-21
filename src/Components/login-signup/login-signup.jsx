
import React from "react";
import "./login-signup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import { useState } from "react";
import kapsul_logo from "../Header/kapsul_logo.png";


export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
 

const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (action=="Login"){
      // Giriş işlemi için HTTP POST isteği gönderme
     
      await fetch ("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("giriş başarılı:" ,data);
      }) 
      .catch((error) => {
        console.log("hata:", error);
      });

    } else {
      await fetch("http://localhost:3001/api/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name:formData.name,
          email:formData.email,
          password:formData.password,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("kayıt başarılı:", data);
      })
      .catch((error) => {
        console.error("Hata:", error);
      });

    }

  };

  return (
    <>
      <header className="header-logo">
        <div>
          <img src={kapsul_logo} alt="" />
        </div>
      </header>

      <div className="container">
        
          <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>

    <form className="inputs" onSubmit={HandleSubmit}>
          
            {/* login için name inputunu kaldırdım */}
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={user_icon} alt="" />
                <input
                 type="text"
                 name="name"
                 placeholder="Name"
                 value={formData.name}
                 onChange={handleInputChange}
                
                />
              </div>
            )}

            <div className="input">
              <img src={email_icon} alt="" />
              <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              
              />
            </div>

            <div className="input">
              <img src={password_icon} alt="" />
              <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              
                />
            </div>
          
          {action === "Sign up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              <span>
                Lost Password ? <a>Click here !</a>
              </span>
            </div>
          )}

          <div className="submit-container">
            <button type="submit"
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign up");
                // <Link to="/Signup"></Link>
              }}
            >
              Sign up
            </button>

            <button
              className={action === "Sign up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            
            </button>
            
          </div>
        
           </form>
      </div>
    </>
  );
};

// import React, { useState } from "react";
// import "./LoginSignup.css";
// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";
// import kapsul_logo from "../Header/kapsul_logo.png";

// export const LoginSignup = () => {
//   const [action, setAction] = useState("Login");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Set the API URL based on the action
//     const apiUrl = action === "Login" ? "http://localhost:3001/api/login" : "http://localhost:3001/api/register";

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Data was successfully submitted
//         console.log("Data submitted successfully");
//         // You can redirect the user or perform other actions here
//       } else {
//         // Handle errors here
//         console.error("Error submitting data");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <>
//       <header className="header-logo">
//         <div>
//           <img src={kapsul_logo} alt="" />
//         </div>
//       </header>

//       <div className="container">
//         <div className="header">
//           <div className="text">{action}</div>
//           <div className="underline"></div>
//         </div>
//         <form className="inputs" onSubmit={handleSubmit}>
//           {action === "Login" ? (
//             <div></div>
//           ) : (
//             <div className="input">
//               <img src={user_icon} alt="" />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//           )}

//           <div className="input">
//             <img src={email_icon} alt="" />
//             <input
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="input">
//             <img src={password_icon} alt="" />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//           </div>

//           {action === "Sign up" ? (
//             <div></div>
//           ) : (
//             <div className="forgot-password">
//               Lost Password? <span>Click here!</span>
//             </div>
//           )}

//           <div className="submit-container">
//             <button type="submit" className="submit">
//               {action === "Login" ? "Login" : "Sign up"}
//             </button>
//             {action === "Login" ? (
//               <div
//                 className="submit gray"
//                 onClick={() => {
//                   setAction("Sign up");
//                 }}
//               >
//                 Sign up
//               </div>
//             ) : (
//               <div
//                 className="submit gray"
//                 onClick={() => {
//                   setAction("Login");
//                 }}
//               >
//                 Login
//               </div>
//             )}
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };