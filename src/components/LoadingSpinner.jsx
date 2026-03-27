const LoadingSpinner = ({ text = "Loading...", fullScreen = false }) => {
  return (
    <div className={fullScreen ? "loading-box fullscreen-loader" : "loading-box"}>
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
};

export default LoadingSpinner;