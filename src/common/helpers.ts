import { DateTime } from "luxon";

export function formatDate(date: string): string {
  const dateTime = DateTime.fromISO(date).setZone("America/New_York");
  const formattedDate = dateTime.toFormat("cccc, LLL dd, yyyy, h:mm a");

  return formattedDate;
}
