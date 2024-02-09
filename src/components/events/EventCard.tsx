import React from "react";
import { Event } from "../../common/types";

interface EventCardProps {
  event: Event;
}
const EventCard = ({ event }: EventCardProps) => {
  return (
    <>
      <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
        <img
          className="w-full rounded-lg"
          src={`/img/${event.id}.jpg`}
          alt={`${event.title}`}
        />
        <div className="pt-4">
          <div className="text-[30px] mb-2">{event.title}</div>
          <div className="text-[20px]">{event.dateTime}</div>
          <div className="text-[20px] mb-[24px] text-[#999FAA]">
            {event.venue}
          </div>
        </div>
        <div className="pb-2">
          <span className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            View more info
          </span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
