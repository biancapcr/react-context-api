import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ChiSiamo from "./pages/ChiSiamo";
import Prodotti from "./pages/Prodotti";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductDetail from "./pages/ProductDetail.jsx";
import { BrowserRouter } from "react-router-dom";
import { BudgetProvider } from "./context/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="chisiamo" element={<ChiSiamo />} />
            <Route path="prodotti" element={<Prodotti />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}

export default App;


