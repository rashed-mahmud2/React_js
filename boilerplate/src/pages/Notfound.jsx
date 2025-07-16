import { Link } from "react-router";
export default function Notfound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h1 className=" text-red-500/70 text-3xl md:text-6xl xl:text-8xl font-bold">
        404! Page not found!!
      </h1>
      <p className="text-xl md:text-3xl font-medium text-slate-500">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to={"/"}>
        <button className=" bg-red-500 text-white py-2 px-3 rounded-md text-lg font-semibold hover:bg-red-400 active:bg-red-600 active:scale-97 transition-all inline-block">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
