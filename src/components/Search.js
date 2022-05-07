import { useState } from "react";
import searchIcon from "../images/search-icon.svg";

const Search = () => {
    const [search, setSearch] = useState(``);

    return (
        <div className="Search relative mb-[50px]">
            <div className="search-wrapper w-[600px] h-[50px] flex items-center rounded ml-10">
                <img className="absolute left-[60px] top-[16px] w-[20px]" src={ searchIcon } alt="search-icon.svg" />
                <input 
                    className="grow h-full border-0 rounded pl-[55px]"
                    type="text"
                    value={ search }
                    onChange={ (e) => setSearch(e.target.value) }
                />
            </div>
        </div>
    );
}

export default Search;