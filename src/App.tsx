import router from './router.tsx';
import { Route, Routes } from 'react-router-dom';
import NavBarLayout from './layouts/NavBarLayout.tsx';
import { ToastContainer } from 'react-toastify';
import useAuthGuard from './hooks/useAuthGuard.tsx';
import useSocketConection from './hooks/useSocketConection.tsx';

function App() {
  useAuthGuard();
  useSocketConection()

  return (
    <>
      <ToastContainer position="bottom-right" draggable />
      <Routes>
        {router.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <NavBarLayout showNavBar={route.showNavBar}>
                  {route.element}
                </NavBarLayout>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
