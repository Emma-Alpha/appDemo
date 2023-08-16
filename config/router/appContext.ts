import React from 'react';
import {
  IClientRoute,
  IRouteComponents,
  IRoutesById,
} from './types';

interface IAppContextType {
  routes: IRoutesById;
  routeComponents: IRouteComponents;
  clientRoutes: IClientRoute[];
  rootElement?: HTMLElement;
  basename?: string;
  history?: any;
}

export const AppContext = React.createContext<IAppContextType>(
  {} as IAppContextType,
);

export function useAppData() {
  return React.useContext(AppContext);
}