import { Link, Outlet, useParams } from "react-router";
import { Popeye } from "./Popeye";
import { Spinach } from "./Spinach";
import { SignUp } from "./SignUp";

export const Profile = () => {
  const name = useParams();
  return (
    <div>
      <h1>Hello from profile page</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visted is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : name === "sign-up" ? (
        <SignUp />
      ) : (
        <DefaultProfile />
      )}
      {/* or use outlet
       <Outlet /> */}
    </div>
  );
};

export const DefaultProfile = () => {
  return (
    <>
      <p> Oh! nothing to see here!</p>
      <Outlet />
      <ul>
        <li>
          <Link to="popeye">Popeye</Link>
        </li>
        <li>
          <Link to="spinach">Spinach</Link>
        </li>
        <li>
          <Link to="../image">Image</Link>
        </li>
      </ul>
    </>
  );
};
