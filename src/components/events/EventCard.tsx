import { Event } from "../../common/types";
import { formatDate } from "../../common/helpers";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <div className="group m-auto md:w-[472px] max-w-md overflow-hidden rounded-[20px] transition ease-in-out hover:bg-[#F2F4F8]">
        <div className="px-[20px] mt-[52px] mb-[24px]">
          <img
            className="w-full h-[288px] object-cover rounded-[20px]"
            src={`/img/${event.id}.jpg`}
            alt={event.title}
          />
        </div>
        <div className="px-[20px] h-[150px]">
          <div className="mb-[12px] text-[24px] font-[200] leading-7 transition ease-in-out group-hover:font-[600]">
            {event.title}
          </div>
          <div className="mt-3 mb-[8px] text-[16px] font-[200] text-[#474C58] transition ease-in-out group-hover:font-[600]">
            {formatDate(event.dateTime)}
          </div>
          <div className="mb-[20px] text-[16px] text-[#999FAA]">
            {event.venue}
          </div>
        </div>
        <div className="mb-[15px]">
          <span className="inline-block ml-[7px] rounded-[10px] bg-[#F2F4F8] px-[12px] py-[10px] text-sm text-[16px] font-[200] text-[#474C58] transition ease-in-out group-hover:font-[600]">
            View more info
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
