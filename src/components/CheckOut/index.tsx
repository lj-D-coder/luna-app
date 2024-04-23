import * as React from "react";
import { CheckOutForm } from "../CheckOut/CheckOutForm";
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
  totalPrice: number;
  discount: number;
  onSuccess: (success: boolean) => void;
}

export const CheckOutModal: React.FC<ModalProps> = ({ isOpen, setOpen, totalPrice, discount, onSuccess })=> {
  // const [open, setOpen] = useState(isOpen);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setOpen}  >
      <DialogContent className="sm:max-w-[425px] md:max-w-[525px]">
        <DialogHeader>
          </DialogHeader>
          
          <CheckOutForm setOpen={setOpen} totalPrice={totalPrice} discount={discount} onSuccess={onSuccess} />

      </DialogContent>
    </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setOpen}>
      <DrawerContent className="px-4" >
        <DrawerHeader className="text-left">
        </DrawerHeader>
        <CheckOutForm setOpen={setOpen} totalPrice={totalPrice} discount={discount} onSuccess={onSuccess} />
        <DrawerFooter className="pt-2">
          {/* <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
