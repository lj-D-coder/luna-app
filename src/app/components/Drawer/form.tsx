import React, { useState } from "react";
import type { Dayjs } from "dayjs";

// Define the type of props
interface FormComponentProps {
  selectedDate: Dayjs;
  selectedTime: string | null;
}

const FormComponent: React.FC<FormComponentProps> = ({ selectedDate, selectedTime }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Date and time are required");
      return;
    }
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Phone Number:
        <input type="tel" pattern="[0-9]{10}" value={phoneNumber} onChange={handlePhoneNumberChange} required />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormComponent;
