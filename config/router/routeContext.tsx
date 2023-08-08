import React from 'react';
import { IRoute } from './types';

interface IMicroAppRoute {
  microApp?: string | undefined,
  entry?: string | undefined
}

export interface IRouteContextType {
  route: IRoute & IMicroAppRoute;
}
export const RouteContext = React.createContext<IRouteContextType | undefined>(
  undefined,
);

export function useRouteData(): IRouteContextType {
  return React.useContext(RouteContext)!;
}
