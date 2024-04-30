import * as React from "react";
import { OfferedServices } from "./offeredService";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from "@/components/ui/drawer";


interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
}

export const ShowOfferModal: React.FC<ModalProps> = ({ isOpen, setOpen })=> {
  // const [open, setOpen] = useState(isOpen);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setOpen}  >
      <DialogContent className="sm:max-w-[425px] md:max-w-[525px]">
        <DialogHeader>
          </DialogHeader>
          <OfferedServices/>
          {/* <CheckOutForm setOpen={setOpen} totalPrice={totalPrice} discount={discount} onSuccess={onSuccess} /> */}

      </DialogContent>
    </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="px-4" >
        <DrawerHeader className="text-left">
        </DrawerHeader>
        {/* <CheckOutForm setOpen={setOpen} totalPrice={totalPrice} discount={discount} onSuccess={onSuccess} /> */}
        <DrawerFooter className="pt-2">
          {/* <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
