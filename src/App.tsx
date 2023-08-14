import { RouterProvider } from 'react-router-dom';
import { router } from '@routes/router';
import { Loading } from '@components/atoms/loader/loading';
import { Provider } from 'react-redux';
import store from '@stores/stores';

function App() {
  //change your store if our application is more complex
  return (
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </Provider>
  );
}

// function App() {
//   return <RouterProvider router={router} fallbackElement={<Loading />} />;
// }

export default App;
