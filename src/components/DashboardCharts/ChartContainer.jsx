const ChartContainer = ({ title, children, isCategory = false }) => (
  <div
    className={`d-flex flex-column align-items-center justify-content-center p-3 rounded-4 ${
      isCategory ? "" : "border"
    }`}
  >
    <h4 className="fw-medium">{title}</h4>
    <div style={{ width: "100%", height: 350 }}>{children}</div>
  </div>
);

export default ChartContainer;
