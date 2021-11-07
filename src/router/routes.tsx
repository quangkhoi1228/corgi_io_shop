import { lazy } from "react";

type Routes = {
  title?: string;
  LoadComponent: React.ComponentType;
  exact: boolean;
  path: string;
};

const routes: Routes[] = [
  {
    title: "Inventory",
    path: "/inventory",
    LoadComponent: lazy(() => import("components/pages/inventory")),
    exact: true,
  },
  {
    title: "Home",
    path: "/page/:id",
    LoadComponent: lazy(() => import("components/pages/home/index")),
    exact: true,
  },
  {
    title: "Detail",
    path: "/pets/:id",
    LoadComponent: lazy(() => import("components/pages/detail")),
    exact: true,
  },
  {
    title: "Detail",
    path: "/items/:id",
    LoadComponent: lazy(() => import("components/pages/detail")),
    exact: true,
  },
  {
    title: "Detail",
    path: "/lands/:id",
    LoadComponent: lazy(() => import("components/pages/detail")),
    exact: true,
  },
  {
    title: "Detail",
    path: "/builders/:id",
    LoadComponent: lazy(() => import("components/pages/detail")),
    exact: true,
  },
  {
    title: "Home",
    path: "/",
    LoadComponent: lazy(() => import("components/pages/home/index")),
    exact: true,
  },
];

export default routes;
