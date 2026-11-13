import App from "./App";
import { ErrorPage } from "./ErrorPage";
import { Profile } from "./Profile";
import { SignUp } from "./SignUp";
import { Popeye } from "./Popeye";
import { Spinach } from "./Spinach";
import { Image } from "./Image";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "image", element: <Image /> },
  {
    path: `profile`,
    element: <Profile />,
  },
  {
    path: "profile/sign-up",
    element: <SignUp />,
    // children: [{ path: "spinach", element: <Popeye /> }],
  },
  { path: "profile/popeye", element: <Popeye /> },
  { path: "profile/spinach", element: <Spinach /> },
];

// [
//   { path: "/", element: <App />, errorElement: <ErrorPage /> },
//   {
//     path: "profile/:name",
//     element: <Profile />,

//     // children: [
//     //   { index: true, element: <DefaultProfile /> },
//     //   { path: "spinach", element: <Spinach /> },
//     //   { path: "popeye", element: <Popeye /> },
//     // ],
//   },
// ]
