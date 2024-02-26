/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchIcon from "/search.svg";
import FiltersIcon from "/filter_list.svg";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store/search/searchSlice";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    /* this is what actually changes the redux state */
    event.preventDefault(); /* to stop the form from reloading the page */
    const newValue = event.target.elements["search-query"].value;
    dispatch(setSearchQuery(newValue));
  };

  const handleChange = (event: any) => {
    /* for visibility in the search bar */
    setInputValue(event.target.value);
  };

  return (
    <div className="mx-7 mb-5">
      <form onSubmit={handleSubmit} noValidate>
        <div className="relative min-w-full">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <img src={SearchIcon} className="w-4 h-4 text-gray-500" />
          </div>
          <input
            name="search-query"
            type="search"
            id="search-query"
            className="block w-full px-4 pl-10 py-4 text-sm text-gray-900 bg-[#F2F4F8] border border-gray-300 rounded-[12px] focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search for a Juilliard event"
            required
            value={input}
            onChange={handleChange}
          />
          <div className="hidden absolute inset-y-0 end-0 md:flex items-center pr-5 pointer-events-none">
            <img src={FiltersIcon} className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
