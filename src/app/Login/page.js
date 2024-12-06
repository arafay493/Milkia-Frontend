"use client";
// Note: Login component...!

import { useState } from "react";
import { assetPaths } from "@/paths/path";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { SigninUser } from "@/redux/action/auth-action";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";


export default function Login() {

  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Note: Api response handler...!
  const resHandler = (data) => {
    console.log("resHandler");
    console.log(data);
    if (data?.status == 200) {
      // alert("i am here")
      // openSnackbar(data?.data?.message); // For showing success message...!
      // setCookie("userAuthenticated", true); // For set cookie for session maintain...!
      localStorage.setItem("AuthToken", data?.data?.admin?.accessToken); // Saving token for api security purpose...!
      localStorage.setItem("RefreshToken", data?.data?.admin?.refreshToken); // Saving refresh token to regenerate auth token...!
      // window.location.href = "/dashboard"; // Route the current window tab...!
      router.push("/dashboard"); // Changing routes...!
      // window.location.reload(); // Reload the current window tab...!
    } else if (data?.status != 200) {
      openSnackbar(data?.message);

    } else {
      console.log("Error occured: ", error);
    }
  };

  const signin = async (e) => {
    e.preventDefault();
    if (!email) {
      alert('Enter Email')
    } else if (!password) {
      alert('Enter Password')
    } else {

      const userData = {
        email: email,
        password: password,
        fcmToken: "",
        loginType: "email"
      };

      console.log('Sign In with data:', userData);

      try {
        const result = await dispatch(SigninUser(userData, resHandler));
        console.log('Sign In result:', result);
      } catch (error) {
        console.error('Sign In error in component:', error);
      }
    }
  };

  return (
    <>
      <div className={styles.main_login_div}>
        <div className={styles.main_login_left_div}>
          <div className={styles.inner_login_left_div}>
            <Image
              className={styles.logo}
              src={assetPaths.milkiaAppLogo}
              alt="milkiaAppLogo"
            />
            <div className={styles.login_heading}>Sign In</div>
            <form className={styles.login_form} onSubmit={signin}>
              <div className={styles.inner_login_form_input}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inner_login_form_input}>
                <label>Password</label>
                <input
                  style={{ paddingRight: "3rem" }}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className={styles.inner_login_form_password_hide_show}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <IoEye /> : <IoMdEyeOff />}
                </div>
              </div>
              <div className={styles.inner_login_form}>
                <label>
                  {/* <input type="checkbox" name="" /> &nbsp; Remember me */}
                </label>
                <div>Forgot Password?</div>
              </div>
              <button
                type="submit"
                className={styles.inner_login_form_submit_button}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

        <div className={styles.main_login_right_div}>
          <div className={styles.inner_login_right_text_div}>
            <div className={styles.inner_login_right_text_heading_div}>
              Introducing new features
            </div>
            <div className={styles.inner_login_right_text_para_div}>
              Analyzing previous trends ensures that businesses always make the
              right decision. And as the scale of the decision and it’s impact
              magnifies...
            </div>
          </div>
          <div className={styles.inner_login_right_img_div}>
            <Image src={assetPaths.loginrightimage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}