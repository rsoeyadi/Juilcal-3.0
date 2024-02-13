import SearchIcon from "/search.svg";
import FiltersIcon from "/filter_list.svg";

const SearchBar = () => {
  return (
    <div className="mx-11">
      <form>
        <div className="relative min-w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img className="w-4 h-4 text-gray-500" src={SearchIcon} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-[12px] bg-[#F2F4F8] focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for a Juilliard event"
            required
          />
          <div className="absolute inset-y-0 end-5 flex items-center ps-3 pointer-events-none">
            <img className="w-4 h-4 text-gray-500" src={FiltersIcon} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
