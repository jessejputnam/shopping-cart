import "../styles/SignUp.css";

const SignIn = (props) => {
  const handleSignInSubmit = (e) => {
    e.preventDefault();
    props.signInData({
      email: e.target.children[1].value,
      password: e.target.children[4].value
    });
  };

  const changeToSignUp = () => {
    props.modalType("signup");
  };

  return (
    <div className='SignIn'>
      <h1>Sign In</h1>
      <form onSubmit={handleSignInSubmit}>
        <label htmlFor='email__input'>Email: </label>
        <input
          type='email'
          className='signin__input'
          id='email__input'
          placeholder='example@email.com'
          required
        ></input>
        <br />
        <label htmlFor='password__input'>Password: </label>
        <input
          type='password'
          className='signin__input'
          id='password__input'
          placeholder='********'
          required
        ></input>
        <input type='submit' id='submit__signin' value='Sign In'></input>
      </form>
      <button
        onClick={changeToSignUp}
        type='button'
        className='btn__nav__signup'
      >
        Go to Sign Up
      </button>
    </div>
  );
};

export default SignIn;
