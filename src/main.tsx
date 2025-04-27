import { Provider } from "@/components/ui/provider";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
