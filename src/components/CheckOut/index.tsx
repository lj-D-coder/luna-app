import * as React from "react";
import { CheckOutForm } from "../CheckOut/CheckOutForm";

import { cn } from "@/lib/utils/cn";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const CheckOutModal: React.FC<ModalProps> = ({ isOpen, setOpen })=> {
  // const [open, setOpen] = useState(isOpen);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setOpen}  >
      <DialogContent className="sm:max-w-[425px] md:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Provide Details</DialogTitle>
          </DialogHeader>
          
          <CheckOutForm setOpen={setOpen}/>

      </DialogContent>
    </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent >
        <DrawerHeader className="text-left">
          <DrawerTitle>Provide Details</DrawerTitle>
        </DrawerHeader>
        <CheckOutForm setOpen={setOpen}/>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
