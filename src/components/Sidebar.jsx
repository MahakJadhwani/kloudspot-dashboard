const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-white border-r">
      <div className="p-4 font-semibold text-lg">
        Kloudspot
      </div>

      <nav className="px-4 space-y-2 text-sm">
        <a href="/dashboard" className="block text-gray-700">Dashboard</a>
        <a href="/crowd-entries" className="block text-gray-700">Crowd Entries</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
