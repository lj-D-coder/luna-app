import * as React from "react";
import { CalendarForm } from "../CheckOut/dayPicker";

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
    serviceDetails: string
}

export const ViewDetails: React.FC<ModalProps> = ({ isOpen, setOpen, serviceDetails }) => {
    // const [open, setOpen] = useState(isOpen);


    return (
        <Dialog open={isOpen} onOpenChange={setOpen}  >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Service Details</DialogTitle>
                    <DialogDescription>What we offer in this service</DialogDescription>
                </DialogHeader>

                <CalendarForm />
                <ProfileForm className="px-4" />
            </DialogContent>
        </Dialog>
    );


}

function ProfileForm({ className }: React.ComponentProps<"form">) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <p>Hi</p>
            </div>
        </form>
    );
}
