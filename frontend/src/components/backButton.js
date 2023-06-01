import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const BackButton = ({className}) => {
    const navigate = useNavigate()
    function goBack() {
        navigate(-1)
    }
    return (
        <button className={`text-lg flex items-center font-imprima text-white ${className}`}>
            <Icon icon="teenyicons:arrow-left-outline" className="text-4xl" /> 
            <p className="ms-3" onClick={goBack}>Back</p>
        </button>
    )
}
export default BackButton;