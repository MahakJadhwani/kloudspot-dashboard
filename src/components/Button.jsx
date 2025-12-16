export default function Button({ children, onClick, loading = false }) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition disabled:opacity-50"
    >
      {loading ? "Please wait..." : children}
    </button>
  )
}
