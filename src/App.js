import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Dashboard />} />
          <Route path="customers" element={<Dashboard />} />
          <Route path="transactions" element={<Dashboard />} />
          <Route path="messages" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
          <Route path="support" element={<Dashboard />} />
        </Route>
        <Route path="login" element={<div>This is login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
