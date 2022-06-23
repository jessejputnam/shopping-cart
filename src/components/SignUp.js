import "../styles/SignUp.css";

const SignUp = (props) => {
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    props.signUpData({
      email: e.target.children[1].value,
      password: e.target.children[4].value
    });
  };

  const changeToSignIn = () => {
    props.modalType("signin");
  };

  return (
    <div className='SignUp'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUpSubmit}>
        <label htmlFor='email__input'>Email: </label>
        <input
          type='email'
          className='signup__input'
          id='email__input'
          placeholder='example@email.com'
          required
        ></input>
        <br />
        <label htmlFor='password__input'>Password: </label>
        <input
          type='password'
          className='signup__input'
          id='password__input'
          placeholder='********'
          required
        ></input>
        <input type='submit' id='submit__signup' value='Register'></input>
      </form>
      <button
        onClick={changeToSignIn}
        type='button'
        className='btn__nav__signup'
      >
        Go to Sign In
      </button>
    </div>
  );
};

export default SignUp;
