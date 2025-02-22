import { Dialog } from "@headlessui/react";
import { formatTime } from "@/lib/time";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  guesses: string[];
};

export const WinModal = ({ isOpen, handleClose, guesses }: Props) => {
  return (
    <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
          <Dialog.Title className="text-lg font-bold mb-4">
            Congratulations! You guessed correctly! 🎉
          </Dialog.Title>
          <p className="mb-2">Time: {formatTime(Date.now())}</p>
          <p className="mb-4">Attempts: {guesses.length}/6</p>
          <button
            onClick={handleClose}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
