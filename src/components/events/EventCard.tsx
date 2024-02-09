import React from "react";
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
          className="ml-[9px] mb-[24px] w-full rounded-lg"
          src={`/img/${event.id}.jpg`}
          alt={`${event.title}`}
        />
        <div className="ml-[9px]">
          <div className="text-[24px] mb-[12px] font-[200]">{event.title}</div>
          <div className="text-[16px] mb-[4px] font-[200] text-[#474C58]">
            {formatDate(event.dateTime)}
          </div>
          <div className="text-[16px] mb-[20px] text-[#999FAA]">
            {event.venue}
          </div>
        </div>
        <div className="">
          <span className="inline-block bg-[#F2F4F8] rounded-[10px] px-[10px] py-[10px] text-sm font-[200] text-gray-700 mr-2 mb-2 text-[16px]">
            View more info
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
