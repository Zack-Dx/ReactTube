import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="md:col-span-10 col-span-8 flex items-center justify-center h-screen">
      <div className="text-center">
        <img
          src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
          alt="Error Monkey"
          className="w-40 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          This page isn&apos;t available. Sorry about that. Try searching for
          something else.
        </p>
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition duration-300"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
}
