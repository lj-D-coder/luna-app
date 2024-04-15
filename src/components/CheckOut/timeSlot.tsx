import * as React from "react"

// Generate an array of time slots from 9am to 5pm
const timeSlots = Array.from({ length: 9 }, (_, i) => {
  const hour = 9 + i;
  return `${hour <= 12 ? hour : hour - 12}:00 - ${hour < 12 ? hour + 1 : hour - 11}:00 ${hour < 12 ? 'AM' : 'PM'}`;
});

interface TimeSlotPickerProps {
  selectedTimeSlot: string;
  onSelect: (value: string) => void;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({ selectedTimeSlot, onSelect }) => {
  return (
    <div className="grid grid-cols-3 gap-2 p-3">
      {timeSlots.map(timeSlot => (
        <button 
          key={timeSlot} 
          onClick={() => onSelect(timeSlot)}
          className={`p-2 rounded-md ${selectedTimeSlot === timeSlot ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {timeSlot}
        </button>
      ))}
    </div>
  );
}
