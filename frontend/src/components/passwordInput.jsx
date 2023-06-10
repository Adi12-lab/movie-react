import { useState, forwardRef } from "react";
import { Icon } from "@iconify/react";

const PasswordInput = forwardRef(({ className }, ref) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="relative">
      <input className={className} type={passwordShown ? "text" : "password"} ref={ref} />
      <button type="button" className="absolute top-3 right-3">
        <Icon icon={passwordShown ? "bi:eye-slash-fill" : "mdi:eye"} onClick={togglePassword} />
      </button>
    </div>
  );
});

export default PasswordInput;
