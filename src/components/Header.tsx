import FiltersIcon from "/filter_list.svg";
import BookmarkIcon from "/bookmark.svg";

const Header = () => {
  return (
    <div className="mx-7 my-[13px]">
      <h1 className="inline-block text-[30px] font-bold text-[#0171BB]">
        Juilcal
      </h1>{" "}
      <div className="mt-3 md:hidden flex float-right">
        <div className="pointer-events-none mr-2">
          <img src={FiltersIcon} className="w-6 h-6 text-gray-500" />
        </div>
        <div className="pointer-events-none">
          <img src={BookmarkIcon} className="w-6 h-6 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Header;
