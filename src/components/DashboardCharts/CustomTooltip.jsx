const CustomTooltip = ({ active, payload, label, text, exp = "" }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-body-tertiary border flex flex-col gap-4 rounded-3">
        <p className="text-primary fw-semibold w-100"> {label}</p>
        <p>
          {text}:<span className="ms-1 fw-bolder">{payload[0].value}</span>
        </p>
        {exp == "" ? (
          ""
        ) : (
          <p>
            {exp}:<span className="ms-2 fw-bolder">${payload[1].value}</span>
          </p>
        )}
      </div>
    );
  }
};

export default CustomTooltip;
