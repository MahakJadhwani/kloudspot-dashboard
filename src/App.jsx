import { Routes, Route } from "react-router-dom";
import Login from "./pages/TempLogin";
import Dashboard from "./pages/TempDashboard";
import CrowdEntries from "./pages/CrowdEntries";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/crowd-entries"
        element={
          <ProtectedRoute>
            <CrowdEntries />
          </ProtectedRoute>
        }
      />

      {/* Fallback route: redirect unknown paths to login */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;

