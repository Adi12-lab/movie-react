import { Icon } from "@iconify/react";
import { useNavigate, useLocation } from "react-router-dom";

const BackButton = ({ className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  function goBack() {
    if (location.pathname === "/dashboard" || location.pathname === "/login") {
      navigate("/");
    } else {
      navigate(-1);
    }
  }

  return (
    <button
      className={`flex items-center font-imprima text-lg text-white ${className}`}
      onClick={goBack}
    >
      <Icon icon="teenyicons:arrow-left-outline" className="text-4xl" />
      <p className="ms-3">Back</p>
    </button>
  );
};

export default BackButton;
