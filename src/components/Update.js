import "../styles/Update.css";

const Update = (props) => {
  const classes = props.updated ? "Update visible" : "Update";

  return (
    <div className={classes}>
      <p>Cart updated</p>
    </div>
  );
};

export default Update;
