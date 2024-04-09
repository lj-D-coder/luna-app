import React, { useState } from "react";
import type { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";

// Define the type of props
interface FormComponentProps {
  selectedDate: Dayjs;
  selectedTime: string | null;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormComponent: React.FC<FormComponentProps> = ({ selectedDate, selectedTime, success, setSuccess }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!selectedDate || !selectedTime) {
      alert("Date and time are required");
      return;
    }

    const formData = {
      name: name,
      phoneNo: phoneNumber,
      date: selectedDate,
      time: selectedTime,
    };

    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);

    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to create Booking.");
    }

    setSuccess(true); 
    
    router.refresh();
    router.push("/");
  };

  return (
    <>
      {success ? <div className="alert alert-success">Booking created successfully!</div> :
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="block">
            <label className="block">Full Name:</label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              style={{ border: "1px solid #718096" }}
              className="mt-1 p-2 block w-full rounded-md border-gray-900 shadow-sm"
            />
          </div>
          <div className="block">
            <label className="block">Enter 10 digit Mobile Number:</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              style={{ border: "1px solid #718096" }}
              className="mt-1 p-2 block w-full rounded-md border-gray-900 shadow-sm"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="mt-1 block w-full rounded-md border-blue-600 bg-blue-600 text-white p-2 cursor-pointer hover:bg-blue-700"
          />
        </form>
      }
    </>
  );
};

export default FormComponent;
