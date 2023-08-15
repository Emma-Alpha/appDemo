import { RenderClientOpts } from './types';
import { getConfigRoutes } from './routesConfig';

export function winPath(path: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(path);
  if (isExtendedLengthPath) {
    return path;
  }
  return path.replace(/\\/g, '/');
}

export function getRoutes(routes: RenderClientOpts['routes']) {
  let IRoutesById: any = null;

  IRoutesById = getConfigRoutes({ routes });

  return IRoutesById;
}
