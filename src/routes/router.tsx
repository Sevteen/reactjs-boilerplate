import { RouteObject, createBrowserRouter } from 'react-router-dom';
import { Index } from '@pages/index';
import { NotFound } from '@pages/404';

const rootRoute: RouteObject[] = [{
  path: 'login/:returnUrl',
  
}
]

export const router = createBrowserRouter([
  {
    path: '/',
    Component: null,
    id: 'root',
    errorElement: <NotFound />,
    children: [{ path: '', index: true, id: 'index', element: <Index /> }],
  },
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
