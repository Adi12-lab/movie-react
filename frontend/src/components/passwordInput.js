import { useState } from "react"
import { Icon } from "@iconify/react"
const PasswordInput = ({className}) => {
    const [passwordShown, setPasswordShown] = useState(false)
    const togglePassword = () => {
        setPasswordShown(!passwordShown)
    }
    return (
        <div className="relative">
            <input className={className} type={passwordShown ? 'text' : 'password'} />
            <button type="button" className="absolute top-3 right-3"><Icon icon={passwordShown ? 'bi:eye-slash-fill' : 'mdi:eye'} onClick={togglePassword}/></button>
        </div>
    )
}
//mdi:eye bi:eye-slash-fill
export default PasswordInput