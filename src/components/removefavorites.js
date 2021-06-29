import React from 'react';
import '../App.css';
import {MdDeleteSweep} from "react-icons/md";
const RemoveFavourites = () => {
	return (
		<>
			<span className='lead unsave'>Unsave <MdDeleteSweep/></span>
		</>
	);
};

export default RemoveFavourites;