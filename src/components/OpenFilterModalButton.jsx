import Link from "next/link";
import { GiSettingsKnobs } from "react-icons/gi";

const OpenFilterModalButton = () => (
  <div className="d-flex justify-content-between">
    <h5 className="fw-bold">Filters</h5>
    <Link href="?modal=true">
      <button type="button" className="p-2">
        <GiSettingsKnobs size={24} />
      </button>
    </Link>
  </div>
);

export default OpenFilterModalButton;
