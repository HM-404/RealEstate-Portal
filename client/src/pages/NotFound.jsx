import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <p className="text-2xl mt-4">Page Not Found</p>

      <Link to="/" className="mt-8 bg-blue-600 text-white px-6 py-3 rounded">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
