import { IoSearch } from "react-icons/io5";

const SearchBox = ()=>{
    return(
        <div className="searchBox">
            <IoSearch style={{marginRight: '10px', marginTop: '8px'}} />
            <input type="text" placeholder="Search here..."></input>
        </div>
    )
}

export default SearchBox;