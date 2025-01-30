import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import VentasMacro from './pages/VentasMacro';
import DetalleSucursal from './pages/DetalleSucursal';
import DetalleVendedor from './pages/DetalleVendedor';
import RankingVendedor from './pages/RankingVendedor';
import DetalleUnidadNegocio from './pages/DetalleUnidadNegocio';
import './locale/es-mx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/ventas-macro' element={<VentasMacro />} />
      <Route path='/detalle-unidad-de-negocio' element={<DetalleUnidadNegocio />} />
      <Route path='/detalle-sucursal' element={<DetalleSucursal />} />
      <Route path='/detalle-vendedor' element={<DetalleVendedor />} />
      <Route path='/ranking-vendedor' element={<RankingVendedor />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
