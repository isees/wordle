import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import WordleGame from './WordleGame';
import OnePieceGame from './components/GameBoard';
import { TooltipProvider } from "@/components/ui/tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <nav className="p-4 bg-gray-100 flex gap-4 border-b">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            经典Wordle
          </Link>
          <Link
            to="/onepiece"
            className="px-4 py-2 rounded-lg hover:bg-orange-100 transition-colors"
          >
            海贼王版
          </Link>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<WordleGame />} />
            <Route path="/onepiece" element={<OnePieceGame />} />
          </Routes>
        </div>

      </BrowserRouter>
    </TooltipProvider>
  );
}
