import { useState,useReducer } from 'react';

import styles from './auth.module.css';

import img1 from "../../Assets/image1.png"
import img2 from "../../Assets/image2.png"
import img3 from "../../Assets/image3.png"
import logo from "../../Assets/logo1.svg"


const Auth = (props) => {


  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        document.querySelector("main").classList.toggle(`${styles['sign-up-mode']}`);
        setActive(!isActive);
    }

    return(
        <main>
        <div class={styles.box}>
        <div class={styles['inner-box']}>
          <div class={styles['forms-wrap']}>
            <form action="index.html" autocomplete="off" class={styles['sign-in-form']} onSubmit={submitHandler}>
              <div class={styles.logo}>
                <img src={logo} alt="easyclass" />
                <h4>Voyagers</h4>
              </div>

              <div class={styles.heading}>
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" class={styles.toggle} onClick={handleToggle}>Sign up</a>
              </div>

              <div class={styles['actual-form']}>
                <div class={styles['input-wrap']}>
                  <input
                    type="text"
                    minlength="4"
                    class={styles['input-field']}
                    autocomplete="off"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                    required
                  />
                  <label>Name</label>
                </div>

                <div class={styles['input-wrap']}>
                  <input
                    type="password"
                    // minlength="4"
                    class={styles['input-field']}
                    autocomplete="off"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign In" class={styles['sign-btn']} />

                <p class={styles.text}>
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            <form action="index.html" autocomplete="off" class={styles['sign-up-form']}>
              <div class={styles.logo}>
                <img src={logo} alt="easyclass" />
                <h4>Voyagers</h4>
              </div>

              <div class={styles.heading}>
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" class={styles.toggle} onClick={handleToggle}>Sign in</a>
              </div>

              <div class={styles['actual-form']}>
                <div class={styles['input-wrap']}>
                  <input
                    type="text"
                    minlength="4"
                    class={styles['input-field']}
                    autocomplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div class={styles['input-wrap']}>
                  <input
                    type="email"
                    class={styles['input-field']}
                    autocomplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div class={styles['input-wrap']}>
                  <input
                    type="password"
                    minlength="4"
                    class={styles['input-field']}
                    autocomplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" class={styles['sign-btn']} disabled={!formIsValid} />

                <p class={styles.text}>
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div class={styles.carousel}>
            <div class={styles['images-wrapper']}>
              <img src={img1} class={styles['image img-1 show']} alt="" />
              <img src={img2} class={styles['image img-2']} alt="" />
              <img src={img3} class={styles['image img-3']} alt="" />
            </div>

            <div class={styles['text-slider']}>
              <div class={styles['text-wrap']}>
                <div class={styles['text-group']}>
                  <h2>Create your own courses</h2>
                  <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2>
                </div>
              </div>

              <div class={styles.bullets}>
                <span class={styles.active} data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}

export default Auth;