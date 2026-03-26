import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="center-box">
      <h1>App Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
};
export default ErrorPage;