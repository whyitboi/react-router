import { Link } from "react-router";

export const Popeye = () => {
  return (
    <>
      <p>Hi, I'm Popeye! I love to eat Spinach</p>
      <Link to="/profile">Click here to go back</Link>
    </>
  );
};
