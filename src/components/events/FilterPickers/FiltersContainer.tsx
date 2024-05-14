import FiltersIcon from "/filters_icon.svg";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import DayPicker from "./DayPicker";
import PerformanceTypePicker from "./PerformanceTypePicker";
import EducationAndWorkshopsPicker from "./EducationAndWorkshopsPicker";
import EventTypePicker from "./EventTypePicker";
import AccessTypePicker from "./AccessTypePicker";
import MiscellaneousPicker from "./MiscPicker";

const FiltersContainer = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
      <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
        <img
          src={FiltersIcon}
          alt="Bookmarked Event"
          className="w-12 h-12 text-gray-500"
        />
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-[#667085]">
            Filter your search
          </h5>
          <p className="text-gray-700 font-normal">
            Search Juilliard's performance calendar using advanced filters
          </p>
        </div>
      </div>
      <div className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <DatePicker label="Before date" className="w-full" />
          <DatePicker label="After date" className="w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TimePicker label="Before time" className="w-full" />
          <TimePicker label="After time" className="w-full" />
        </div>
        <DayPicker />
        <PerformanceTypePicker />
        <EducationAndWorkshopsPicker />
        <EventTypePicker />
        <AccessTypePicker />
        <MiscellaneousPicker />
      </div>
    </div>
  );
};

export default FiltersContainer;
