export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

export interface PageRouteProps {
  pageRoute: string;
}

import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}
