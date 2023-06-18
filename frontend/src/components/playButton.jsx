import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PlayButton = ({ className, spanClass }) => {
  const navigate = useNavigate();
  const accessToken = localStorage && localStorage.getItem("accessToken");
  const handlePlay = () => {
    if (!accessToken) {
      navigate("/login");
    } else {
      Swal.fire("Nyari apa ?", "Maaf guys gak ada videonya, wkwkwk", "success");
    }
  };
  return (
    <button className={className} type="button" onClick={handlePlay}>
      <Icon icon="ph:play-fill" />
      <span className={spanClass}>play now</span>
    </button>
  );
};

export default PlayButton;
