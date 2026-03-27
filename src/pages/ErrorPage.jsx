import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="center-box">
      <h1>App is Not Found</h1>
      <p>
        The app you are looking for does not exist or has been removed.
      </p>
      <Link to="/" className="btn btn-error">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;