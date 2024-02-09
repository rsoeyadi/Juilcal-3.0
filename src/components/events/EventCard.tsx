import { Event } from "../../common/types";
import { formatDate } from "../../common/helpers";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <div className="max-w-sm overflow-hidden">
        <div className="max-w-[432px]  mb-[24px] px-[20px] mt-[52px]">
          <img
            className="w-full rounded-[20px] h-[288px] object-cover"
            src={`/img/${event.id}.jpg`}
            alt={`${event.title}`}
          />
        </div>
        <div className="px-[20px]">
          <div className="font-[200] text-[24px] mb-[12px] leading-7">
            {event.title}
          </div>
          <div className="font-[200] text-[16px] text-[#474C58] mb-[8px]">
            {formatDate(event.dateTime)}
          </div>
          <div className="text-[16px] text-[#999FAA] mb-[20px]">
            {event.venue}
          </div>
        </div>
        <div className="mb-[15px]">
          <span className="inline-block rounded-[10px] bg-[#F2F4F8] ml-[7px] px-[12px] py-[10px] text-sm font-[200] text-[#474C58] text-[16px]">
            View more info
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
