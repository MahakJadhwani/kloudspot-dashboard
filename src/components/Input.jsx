export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-500"}
        `}
      />

      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}
