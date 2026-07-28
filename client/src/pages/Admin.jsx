function Admin() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Properties</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Users</h2>
          <p className="text-3xl mt-3">0</p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Messages</h2>
          <p className="text-3xl mt-3">0</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
