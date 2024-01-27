import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import HomeLayout from "src/layouts/HomeLayout/index";

export const routes = [
  {
    exact: true,
    path: "/",
    guard: true,
    layout: HomeLayout,
    component: lazy(() => import("src/views/pages/HomePage/index")),
  },
   {
    exact: true,
    path: "/",
    component: lazy(() => import("src/views/pages/HomePage/index")),
  },
  {
    component: () => <Redirect to="/" />,
  },
  // {
  //   exact: true,
  //   path: "/404",
  //   component: lazy(() => import("src/views/errors/NotFound")),
  // },
  // {
  //   component: () => <Redirect to="/404" />,
  // },
];
