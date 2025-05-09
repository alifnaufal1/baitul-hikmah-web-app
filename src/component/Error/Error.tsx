import "./error.css";

export const Error = ({ error }: { error: string }) => (
  <div className="error-container">
    <span className="error">{error}</span>
  </div>
);
