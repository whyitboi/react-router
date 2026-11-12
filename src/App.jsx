import { Link } from "react-router";
const App = () => {
  return (
    <>
      <h1>Hello from the main page of the app</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile pages</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default App;
