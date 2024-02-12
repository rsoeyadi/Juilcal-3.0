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
    <>
      <div className="mb-[24px] mt-[24px] px-[20px]">
        <img
          alt={event.title}
          className="h-[288px] object-cover rounded-[20px] w-full"
          src={`/img/${event.id}.jpg`}
        />
      </div>
      <div className="px-[20px]">
        <div className="max-w-[300px] font-[600] mb-[12px] md:font-[200] md:group-hover:font-[600] text-[22px] leading-7 transition ease-in-out">
          {event.title}
        </div>
        <div className="font-[600] mt-3 mb-[8px] md:font-[200] md:group-hover:font-[600] text-[16px] text-[#474C58] transition ease-in-out">
          {formatDate(event.dateTime)}
        </div>
        <div className="mb-[20px] text-[16px] text-[#999FAA]">
          {event.venue}
        </div>
        <div className="mb-[15px] relative">
          <span className="bg-[#F2F4F8] font-[600] inline-block mr-[10px] md:font-[200] md:group-hover:font-[600] px-[12px] py-[10px] rounded-[10px] text-[16px] text-[#474C58] text-sm transition ease-in-out">
            <a href={event.link} target="__blank">
              View more info
            </a>
          </span>
          <div className="absolute left-[135px] bottom-[0px]">
            <a href="#" onClick={handleBookmarkClick}>
              <Bookmark />
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="hidden md:flex flex-col h-full group max-w-sm m-auto overflow-hidden rounded-[20px] transition ease-in-out md:hover:bg-[#F2F4F8] md:w-[472px] h-">
        <a href={event.link} target="__blank">
          {renderCardContent()}
        </a>
      </div>

      <div className="flex flex-col h-full md:hidden group max-w-sm m-auto overflow-hidden rounded-[20px] transition ease-in-out md:hover:bg-[#F2F4F8] md:w-[472px]">
        {renderCardContent()}
      </div>
    </>
  );
};

export default EventCard;
