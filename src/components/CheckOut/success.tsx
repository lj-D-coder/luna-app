import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

interface Props {
  openSuccess: boolean;
  setOpenSuccess: (value: boolean) => void;
}

export const BookingComplete: React.FC<Props> = ({ openSuccess, setOpenSuccess }) => {
  const router = useRouter();
  return (
    <Dialog modal={ openSuccess } open={openSuccess} onOpenChange={setOpenSuccess}>
      <DialogContent className="sm:max-w-[425px] bg-gray-100 flex flex-col items-center justify-center space-y-4">
        <CheckCircleIcon className="h-10 w-10 text-green-500" />
        <h2 className="text-2xl font-bold">Booking Complete</h2>
        <p className="text-base font-bold">We will call you soon...</p>
        <DialogFooter>
          <Button
            type="button"
            onClick={() => {
              setOpenSuccess(false); // Function to close the success message
              router.refresh(); // Refresh the router
              router.push("/"); // Navigate to the specified route
            }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
