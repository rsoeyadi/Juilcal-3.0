import { Event } from "../../common/types";
import { formatDate } from "../../common/helpers";
import Bookmark from "../events/Bookmark";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const isTwoLines = event.title.length >= 30;
  const isThreeLines = event.title.length >= 60;

  function getHeightClass() {
    if (isThreeLines) {
      return "h-[160px]";
    } else if (isTwoLines) {
      return "h-[150px]";
    } else {
      return "h-[140px]";
    }
  }

  return (
    <>
      <div className="group max-w-md m-auto overflow-hidden rounded-[20px] transition ease-in-out md:hover:bg-[#F2F4F8] md:w-[472px]">
        <div className="mb-[24px] mt-[52px] px-[20px]">
          <img
            alt={event.title}
            className="h-[288px] object-cover rounded-[20px] w-full"
            src={`/img/${event.id}.jpg`}
          />
        </div>
        <div className={`px-[20px] ${getHeightClass()}`}>
          <div className="font-[600] mb-[12px] md:font-[200] md:group-hover:font-[600] text-[22px] leading-7 transition ease-in-out">
            {event.title}
          </div>
          <div className="font-[600] mt-3 mb-[8px] md:font-[200] md:group-hover:font-[600] text-[16px] text-[#474C58] transition ease-in-out">
            {formatDate(event.dateTime)}
          </div>
          <div className="mb-[20px] text-[16px] text-[#999FAA]">
            {event.venue}
          </div>
        </div>
        <div className="mb-[15px] relative">
          <span className="bg-[#F2F4F8] font-[600] inline-block ml-[7px] mr-[10px] md:font-[200] md:group-hover:font-[600] px-[12px] py-[10px] rounded-[10px] text-[16px] text-[#474C58] text-sm transition ease-in-out">
            View more info
          </span>
          <div className="absolute left-[135px] bottom-[6px]">
            <Bookmark />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
