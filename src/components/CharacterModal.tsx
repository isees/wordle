import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Character } from "@/types";
import { formatBounty } from "./CharacterRow";

interface CharacterModalProps {
  character: Character;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component to display today's target character information
 */
export const CharacterModal = ({ character, isOpen, onClose }: CharacterModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-2 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
            Today's Character
          </DialogTitle>
        </DialogHeader>

        {character && (
          <div className="space-y-4 text-base text-gray-800 dark:text-gray-200">
            <div className="flex items-center gap-3">
              <div className="font-semibold min-w-[80px] text-muted-foreground">
                Name:
              </div>
              <div className="font-medium text-foreground">
                {character.playerName}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-semibold min-w-[80px] text-muted-foreground">
                Height:
              </div>
              <div className="text-foreground">
                {character.height}cm
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="font-semibold min-w-[80px] text-muted-foreground">
                Bounty:
              </div>
              <div className="text-foreground font-mono">
                ฿{formatBounty(character.bounty)}
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};