import React from 'react';
import '../App.css';
import { MdFavorite} from "react-icons/md";
const AddFavourite = () => {
	return (
		<>
			<span className="lead save">Save Recipe <MdFavorite/></span>
		</>
	);
};

export default AddFavourite;