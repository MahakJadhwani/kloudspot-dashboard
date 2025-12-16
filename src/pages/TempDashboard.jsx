import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { getDashboardData } from "../services/dashboardService";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

export default function Dashboard() {
  const [stats, setStats] = useState({ totalEntries: 0, occupancy: 0, activeUsers: 0 });
  const [occupancyData, setOccupancyData] = useState([]);
  const [demographicsData, setDemographicsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getDashboardData();
        setStats(data.stats);            // { totalEntries, occupancy, activeUsers }
        setOccupancyData(data.occupancy); // array for BarChart
        setDemographicsData(data.demographics); // array for PieChart
      } catch (err) {
        setError(err.message || "Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Total Entries</h3>
          <p className="text-2xl font-bold">{stats.totalEntries}</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Current Occupancy</h3>
          <p className="text-2xl font-bold">{stats.occupancy}</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Active Users</h3>
          <p className="text-2xl font-bold">{stats.activeUsers}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Occupancy Over Time</h3>
          <BarChart width={400} height={250} data={occupancyData}>
            <XAxis dataKey="hour" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Demographics</h3>
          <PieChart width={400} height={250}>
            <Pie
              data={demographicsData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#82ca9d"
              label
            >
              {demographicsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
