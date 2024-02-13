import SearchIcon from "/search.svg";
import FiltersIcon from "/filter_list.svg";

const SearchBar = () => {
  return (
    <div className="mx-11">
      <form>
        <div className="relative min-w-full">
          <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
            <img src={SearchIcon} className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full px-4 pl-10 py-4 text-sm text-gray-900 bg-[#F2F4F8] border border-gray-300 rounded-[12px] focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search for a Juilliard event"
            required
          />
          <div className="absolute inset-y-0 end-0 flex items-center pr-5 pointer-events-none">
            <img src={FiltersIcon} className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
