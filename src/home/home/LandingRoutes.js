import React from "react";

const landingRoutes = [
  {
    path: "/demos",
    component: React.lazy(() => import("./Demo")),
  },
  {
    path: "/landing1",
    component: React.lazy(() => import("./Landing1")),
  },
  {
    path: "/landing2",
    component: React.lazy(() => import("./Landing2")),
  },
  {
    path: "/landing3",
    component: React.lazy(() => import("./Landing3")),
  },
  {
    path: "/MileTracker",
    component: React.lazy(() => import("./MileTracker")),
  },
  {
    path: "/landing5",
    component: React.lazy(() => import("./Landing5")),
  },
  {
    path: "/landing6",
    component: React.lazy(() => import("./Landing6")),
  },
  {
    path: "/landing7",
    component: React.lazy(() => import("./Landing7")),
  },
  {
    path: "/landing8",
    component: React.lazy(() => import("./Landing8")),
  },
  {
    path: "/landing9",
    component: React.lazy(() => import("./Landing9")),
  },
  {
    path: "/landing10",
    component: React.lazy(() => import("./Landing10")),
  },
  {
    path: "/Home",
    component: React.lazy(() => import("./Home")),
  },
  {
    path: "/landing12",
    component: React.lazy(() => import("./Landing12")),
  },
];

export default landingRoutes;
