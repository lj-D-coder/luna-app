"use client"
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import BookingCalender from "./calender"

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} className='absolute z-50 right-10 mt-5 bg-black'>
        Book Now
      </Button>
      <Drawer title="Basic Drawer" onClose={onClose} open={open}>
        <BookingCalender/>
      </Drawer>
    </>
  );
};

export default App;