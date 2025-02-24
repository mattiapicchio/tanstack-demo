import "@/assets/css/tailwind.css";
import { NavBar } from "@/components/layout/NavBar";
import { NotFound } from "@/components/layout/NotFound";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <ReactQueryDevtools buttonPosition="top-right" initialIsOpen={false} />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
  notFoundComponent: () => <NotFound />,
});
