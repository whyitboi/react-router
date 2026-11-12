import { useParams } from "react-router";
import { Popeye } from "./Popeye";
import { Spinach } from "./Spinach";

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
      ) : (
        <DefaultProfile />
      )}
      {/* or use outlet
       <Outlet /> */}
    </div>
  );
};

export const DefaultProfile = () => {
  return <p> Oh! nothing to see here!</p>;
};
