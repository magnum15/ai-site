import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Index from "./index"; // Asegúrate de que coincida con el nombre del archivo

// Importa las nuevas páginas
import AutomatizacionDocumentos from './pages/AutomatizacionDocumentos';
import AnalisisSentencias from './pages/AnalisisSentencias';
import ReduccionTareas from './pages/ReduccionTareas';
import PrecisionEficiencia from './pages/PrecisionEficiencia';
import InformacionActualizada from './pages/InformacionActualizada';
import SoporteLitigios from './pages/SoporteLitigios';

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Routes>
        <Route path="/automatizacion-documentos" element={<AutomatizacionDocumentos />} />
        <Route path="/analisis-sentencias" element={<AnalisisSentencias />} />
        <Route path="/reduccion-tareas" element={<ReduccionTareas />} />
        <Route path="/precision-eficiencia" element={<PrecisionEficiencia />} />
        <Route path="/informacion-actualizada" element={<InformacionActualizada />} />
        <Route path="/soporte-litigios" element={<SoporteLitigios />} />
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default App;
