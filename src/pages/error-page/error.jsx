import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen border">
    <div id="error-page" className="mx-auto justify-center text-center">
      <h1 className="text-3xl font-bold text-red-400 pb-10">Oops!</h1>
      <p className="text-lg pb-10">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}