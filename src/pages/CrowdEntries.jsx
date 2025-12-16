import { useEffect, useState } from "react";
import { getCrowdEntries } from "../services/crowdEntriesService";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function CrowdEntries() {
  const [entries, setEntries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEntries();
  }, [currentPage]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getCrowdEntries(currentPage);
      setEntries(data.items);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError("Failed to load crowd entries");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Crowd Entries</h1>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Count</th>
              <th className="border px-4 py-2">Time</th>
            </tr>
          </thead>

          <tbody>
            {entries.map((item) => (
              <tr key={item.id}>
                <td className="border px-4 py-2">{item.id}</td>
                <td className="border px-4 py-2">{item.location}</td>
                <td className="border px-4 py-2">{item.count}</td>
                <td className="border px-4 py-2">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
