import { Icon } from '@iconify/react';
import { NavLink } from 'react-router-dom';
const BackButton = () => {
    return (
        <NavLink className="text-lg flex items-center font-imprima text-white">
            <Icon icon="teenyicons:arrow-left-outline" className="text-4xl" /> 
            <p className="ms-3">Back</p>
        </NavLink>
    )
}
export default BackButton;