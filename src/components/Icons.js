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
  faSave,
  faSignInAlt,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

export const FaPlus = () => <FontAwesomeIcon icon={faPlusCircle} />;
export const FaSearch = () => <FontAwesomeIcon icon={faSearch} />;
export const FaFilter = () => <FontAwesomeIcon icon={faFilter} />; 

export const FaSave = () => <FontAwesomeIcon icon={faSave} />; 

export const FaList = () => <FontAwesomeIcon icon={faList} />;
export const FaTasks = () => <FontAwesomeIcon icon={faTasks} />;

export const FaRemove = () => <FontAwesomeIcon icon={faTrash} />; 
export const FaCheck = () => <FontAwesomeIcon icon={faCheck} />; 

export const FaLogout = () => <FontAwesomeIcon icon={faSignOutAlt} />;
export const FaLogin = () => <FontAwesomeIcon icon={faSignInAlt} />;

export const FaBack = () => <FontAwesomeIcon icon={faArrowLeft} />;