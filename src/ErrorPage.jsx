import { Link } from "react-router";

export const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist</h1>
      <Link to="/">
        You can go back to the homepage by clicking here though!
      </Link>
    </div>
  );
};
