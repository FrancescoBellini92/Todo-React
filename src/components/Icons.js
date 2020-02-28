import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faList, 
    faTasks, 
    faSignOutAlt, 
    faPlusCircle, 
    faSearch, 
    faTrash, 
    faCheck, 
    faFilter,
    faSave
} from '@fortawesome/free-solid-svg-icons';
 
export const FaList = () => <FontAwesomeIcon icon={faList} />;
export const FaTasks = () => <FontAwesomeIcon icon={faTasks} />;
export const FaLogout = () => <FontAwesomeIcon icon={faSignOutAlt} />;
export const FaPlus = () => <FontAwesomeIcon icon={faPlusCircle} />;
export const FaSearch = () => <FontAwesomeIcon icon={faSearch} />;
export const FaRemove = () => <FontAwesomeIcon icon={faTrash} />; 
export const FaCheck = () => <FontAwesomeIcon icon={faCheck} />; 
export const FaFilter = () => <FontAwesomeIcon icon={faFilter} />; 
export const FaSave = () => <FontAwesomeIcon icon={faSave} />; 