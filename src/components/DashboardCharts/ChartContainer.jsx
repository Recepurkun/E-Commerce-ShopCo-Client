import styles from "./styles.module.css";
const ChartContainer = ({ title, children, isCategory = false }) => (
  <div
    className={`d-flex flex-column align-items-center justify-content-center p-3 my-4 mx-3 rounded-4 ${
      isCategory ? `${styles.cardEffect} shadow bg-body-secondary` : "border"
    }`}
  >
    <h5 className="fw-medium my-3 text-center">{title}</h5>
    <div style={{ width: "100%", height: 350 }}>{children}</div>
  </div>
);

export default ChartContainer;
