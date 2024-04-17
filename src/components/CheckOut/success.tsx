import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";

interface Props {
    openSuccess: boolean;
    setOpenSuccess: (value: boolean) => void;
  }
  

export const BookingComplete: React.FC<Props> = ({ openSuccess, setOpenSuccess })=> {
  return (
    <Dialog open={openSuccess} onOpenChange={setOpenSuccess} >
      <DialogContent className="sm:max-w-[425px] bg-green-100 flex flex-col items-center justify-center space-y-4">
        <CheckCircleIcon className="h-10 w-10 text-green-500" />
        <h2 className="text-2xl font-bold">Booking Complete</h2>
        <DialogFooter>
          <Button type="button" onClick={() => setOpenSuccess(false)}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
