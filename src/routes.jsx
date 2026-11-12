import App from "./App";
import { ErrorPage } from "./ErrorPage";
import { Profile } from "./Profile";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
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
