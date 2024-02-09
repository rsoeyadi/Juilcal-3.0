import { Event } from "../../common/types";
import { formatDate } from "../../common/helpers";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <div className="max-w-sm overflow-hidden">
        <img
          className="w-full rounded-lg mb-[24px] ml-[9px]"
          src={`/img/${event.id}.jpg`}
          alt={`${event.title}`}
        />
        <div className="ml-[9px]">
          <div className="font-[200] text-[24px] mb-[12px]">{event.title}</div>
          <div className="font-[200] text-[16px] text-[#474C58] mb-[4px]">
            {formatDate(event.dateTime)}
          </div>
          <div className="text-[16px] text-[#999FAA] mb-[20px]">
            {event.venue}
          </div>
        </div>
        <div>
          <span className="inline-block rounded-[10px] bg-[#F2F4F8] px-[10px] py-[10px] mr-2 mb-2 text-sm font-[200] text-gray-700 text-[16px]">
            View more info
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
