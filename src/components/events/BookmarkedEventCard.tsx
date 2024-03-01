import { Event } from "../../common/types";
import { formatDate } from "../../common/helpers";
import Bookmark from "./Bookmark";

interface BookmarkedEventCardProps {
  event: Event;
}

const BookmarkedEventCard = ({ event }: BookmarkedEventCardProps) => {
  const handleBookmarkClick = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the link from navigating.
  };

  const renderCardContent = () => (
    <div className="bg-white flex group py-2 px-3 rounded-[20px] transition ease-in-out md:hover:bg-[#F2F4F8]">
      <div className="mb-[24px]">
        <img
          alt={event.title}
          className="w-[88px] h-[88px] object-cover rounded-[20px]"
          src={`/img/${event.id}.jpg`}
        />
      </div>
      <div className="px-[20px]">
        <div className="text-[16px] leading-7 font-bold max-w-[250px] transition ease-in-out md:font-[200] ">
          {event.title}
        </div>
        <div className="text-[12px] font-[600] text-[#474C58] transition ease-in-out md:font-[200] ">
          {formatDate(event.dateTime)}
        </div>
        <div className="text-[12px] text-[#999FAA]">{event.venue}</div>
        <div className="relative">
          <span className="inline-block mr-[10px] py-[10px] rounded-[10px] text-[16px] font-[600] text-[#474C58] text-sm transition ease-in-out md:font-[200] ">
            <a href={event.link} target="__blank">
              View more info
            </a>
          </span>
          <div className="absolute bottom-[2px] left-[114px]">
            <a href="#" onClick={handleBookmarkClick}>
              <Bookmark eventId={event.id.toString()} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex flex-col h-full max-w-sm m-auto overflow-hidden w-[472px] mt-5">
        <a href={event.link} target="__blank">
          {renderCardContent()}
        </a>
      </div>

      <div className="mt-3 bg-white flex flex-col h-full md:hidden max-w-sm m-auto overflow-hidden rounded-[20px] transition ease-in-out w-[472px] group">
        {renderCardContent()}
      </div>
    </>
  );
};

export default BookmarkedEventCard;
