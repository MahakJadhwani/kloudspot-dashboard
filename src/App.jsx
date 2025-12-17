import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/TempLogin";
import Dashboard from "./pages/TempDashboard";
import CrowdEntries from "./pages/CrowdEntries";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layouts/AppLayoutTemp";

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected app routes */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crowd-entries" element={<CrowdEntries />} />
      </Route>

      {/* Default redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;

