"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { TimeSlotPicker } from "./timeSlot";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CartProps } from "../ServiceBooking/ServicesGrid";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  bookingDate: z.date({
    required_error: "A date of Booking is required.",
  }),
  phone: z.string().refine(
    (phoneNo) => {
      return phoneNo.length === 10 && /^[0-9]+$/.test(phoneNo);
    },
    {
      message: "Phone number must be exactly 10 digits.",
    }
  ),
  name: z.string().min(8, "Full Name is required."),
  address: z.string().min(8, "Full Address is required."),
  timeSlot: z.string({ required_error: "Time slot is required." }),
});



// Define the props type for CheckOutForm
interface CheckOutFormProp {
  setOpen: (value: boolean) => void;
  totalPrice: number;
  discount: number;
  onSuccess: (success: boolean) => void;
}



export const CheckOutForm: React.FC<CheckOutFormProp> = ({ setOpen, totalPrice, discount, onSuccess }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const router = useRouter();

  // defining state to automatically close after date and slot is selected
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // retrieving cart details from local storage
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let updatedCart = {};

    if (cart) {
      updatedCart = Object.values(cart).map(
        ({ _id: serviceId, supportedModel, thumbnail, images, rating, serviceDetails, ...rest }) => ({
          serviceId,
          ...rest,
        })
      );
    }

    const now = new Date();
    const bookingDateTime = new Date(data.bookingDate);
    const [_, bookingEndTime] = data.timeSlot.split(" - ");
    let [bookingHoursStr, bookingMinutesStr, bookingPeriod] = bookingEndTime.split(/[:\s]/);

    let bookingHours = parseInt(bookingHoursStr);
    let bookingMinutes = parseInt(bookingMinutesStr);

    // Adjust for AM/PM
    if (bookingPeriod === "PM" && bookingHours !== 12) {
      bookingHours += 12;
    } else if (bookingPeriod === "AM" && bookingHours === 12) {
      bookingHours = 0;
    }

    // Adjust the date object to the end time of the selected time slot
    bookingDateTime.setHours(bookingHours, bookingMinutes);

    // Convert both times to milliseconds
    const nowMs = now.getTime();
    const bookingDateTimeMs = bookingDateTime.getTime();

    // Calculate the difference in milliseconds
    const diffMs = bookingDateTimeMs - nowMs;

    if (diffMs < 0) {
      alert("The selected time slot has already passed.");
    } else if (diffMs < 1 * 60 * 60 * 1000) {
      // 1 hours in milliseconds
      alert("Please book at least 1 hours in advance.");
    } else {
      const bookingData = {
        ...data,
        paymentMode: "offline",
        paymentStatus: "pending",
        bookingStatus: "pending",
        billingAmount: totalPrice,
        couponValue: discount,
        bookingDetails: updatedCart,
      };

      console.log(bookingData);

      const res = await fetch("/api/booking", {
        method: "POST",
        body: JSON.stringify(bookingData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to create Booking.");
      }

      localStorage.clear();
      setOpen(false);
      onSuccess(true);
      setTimeout(() => {
        router.refresh();
        router.push("/");
    }, 5000);
      
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("grid items-start gap-4")}>
        <h1 className="text text-lg font-semibold">Provide Details</h1>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>WhatsApp Number</FormLabel>
              <FormControl>
                <Input {...field} type="text" maxLength={10} placeholder="Enter 10 digit phone number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter your full name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Full Address</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter your address" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-row justify-between">
          <FormField
            control={form.control}
            name="bookingDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of Booking</FormLabel>
                <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-[150px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Select a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={(value) => {
                        field.onChange(value);
                        setCalendarOpen(false);
                      }}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0); // remove time part of today
                        const nextWeek = new Date();
                        nextWeek.setDate(today.getDate() + 10);
                        return date < today || date > nextWeek;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Choose a booking date</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timeSlot"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Time Slot</FormLabel>
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn("w-[150px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                      >
                        {field.value ? field.value : <span>Pick a time slot</span>}
                        <ClockIcon className="ml-auto h-4 w-4 opacity-50" /> {/* Use the clock icon */}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="center">
                    <TimeSlotPicker
                      selectedTimeSlot={field.value}
                      onSelect={(value) => {
                        field.onChange(value);
                        setIsOpen(false); // Close the popover when a value is selected
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>Choose a time slot</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Book Now</Button>
      </form>
    </Form>
  );
};
