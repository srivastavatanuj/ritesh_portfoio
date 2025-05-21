import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-black/70 text-center px-6">
      <h1 className="text-8xl font-bold text-[#95977e]">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="mt-2 text-gray-400">The page you are looking for does not exist.</p>
      <div className="mt-6">
        <Link to="/" className="px-6 py-3 bg-[#95977e] text-black font-semibold rounded-lg shadow-md hover:bg-[#8c8f72] transition">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
