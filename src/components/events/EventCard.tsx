import { Event } from "../../common/types";
import { formatDate } from "../../common/helpers";
import Bookmark from "../events/Bookmark";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const handleBookmarkClick = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevent the link from navigating.
  };

  const renderCardContent = () => (
    <div className="group py-2 rounded-[20px] transition ease-in-out md:hover:bg-[#F2F4F8]">
      <div className="mb-[24px] mt-[24px] px-[20px]">
        <img
          alt={event.title}
          className="w-full h-[288px] object-cover rounded-[20px]"
          src={`/img/${event.id}.jpg`}
        />
      </div>
      <div className="px-[20px]">
        <div className="text-[22px] leading-7 font-[600] mb-[12px] max-w-[250px] transition ease-in-out md:font-[200] group-hover:font-[600]">
          {event.title}
        </div>
        <div className="text-[16px] font-[600] mt-3 mb-[8px] text-[#474C58] transition ease-in-out md:font-[200] group-hover:font-[600]">
          {formatDate(event.dateTime)}
        </div>
        <div className="text-[16px] mb-[20px] text-[#999FAA]">
          {event.venue}
        </div>
        <div className="relative mb-[15px]">
          <span className="inline-block mr-[10px] px-[12px] py-[10px] rounded-[10px] bg-[#F2F4F8] text-[16px] font-[600] text-[#474C58] text-sm transition ease-in-out md:font-[200] group-hover:font-[600]">
            <a href={event.link} target="__blank">
              View more info
            </a>
          </span>
          <div className="absolute bottom-[0px] left-[135px]">
            <a href="#" onClick={handleBookmarkClick}>
              <Bookmark />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="hidden md:flex flex-col h-full max-w-sm m-auto overflow-hidden w-[472px]">
        <a href={event.link} target="__blank">
          {renderCardContent()}
        </a>
      </div>

      <div className="flex flex-col h-full md:hidden max-w-sm m-auto overflow-hidden rounded-[20px] transition ease-in-out w-[472px] md:hover:bg-[#F2F4F8] group">
        {renderCardContent()}
      </div>
    </>
  );
};

export default EventCard;
