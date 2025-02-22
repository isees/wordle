import { Input } from '@/components/ui/input';
import characters from '@/data/onepiece/characters';
import { useDebounce } from '@/hooks/useDebounce';
import { Character } from '@/types';
import Fuse from 'fuse.js';
import React, { useEffect, useRef, useState } from 'react';
import { Search } from 'lucide-react';

interface AutocompleteProps {
  onSelect: (character: Character) => void;
  selectedCharacters: Character[];
}

const fuseOptions = {
  keys: ['playerName', 'alias'],
  threshold: 0.3,
  includeMatches: true
};

// 添加悬赏金格式化函数
const formatCompactBounty = (bounty: number) => {
  if (bounty >= 1e9) {
    return `${Math.floor(bounty / 1e9)}B`;
  }
  if (bounty >= 1e6) {
    const millions = Math.floor(bounty / 1e6);
    const remainder = Math.floor((bounty % 1e6) / 1e4);
    return remainder > 0 ? `${millions}M${remainder}` : `${millions}M`;
  }
  return bounty.toLocaleString();
};

export const Autocomplete = ({ onSelect, selectedCharacters }: AutocompleteProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Character[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const debouncedQuery = useDebounce(query, 300);

  const fuse = new Fuse(characters, fuseOptions);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          onSelect(results[selectedIndex]);
          setIsOpen(false);
          setQuery('');
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  // 添加点击外部关闭逻辑
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node) &&
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (debouncedQuery) {
      const searchResults = fuse.search(debouncedQuery)
        .map(r => r.item)
        .filter(char =>
          !selectedCharacters.some(c => c.playerId === char.playerId)
        )
        .filter((char, index, self) =>
          index === self.findIndex(c => c.playerId === char.playerId)
        );

      setResults(searchResults);
      setIsOpen(searchResults.length > 0);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [debouncedQuery, selectedCharacters]);

  const handleSubmit = () => {
    if (selectedIndex >= 0 && selectedIndex < results.length) {
      onSelect(results[selectedIndex]);
      setIsOpen(false);
      setQuery('');
    }
  };

  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedItem = resultsRef.current.children[selectedIndex] as HTMLElement;
      selectedItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }, [selectedIndex]);

  return (
    <div className="autocomplete-container relative mb-8">
      <div className="relative">
        <Input
          className="pl-4 pr-12 h-12 rounded-full shadow-sm border-2 border-gray-200 hover:border-gray-300 focus-visible:ring-emerald-500"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            if (e.target.value) {
              setIsOpen(true)
            }
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search characters..."
          ref={inputRef}
        />
        <button
          onClick={handleSubmit}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-emerald-600 transition-colors"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
            <div className="max-h-60 overflow-y-auto" ref={resultsRef}>
              {results.map((character, index) => (
                <div
                  key={character.playerId}
                  className={`p-2 hover:bg-gray-100 cursor-pointer ${selectedIndex === index ? 'bg-blue-50' : ''
                    }`}
                  onClick={() => {
                    onSelect(character);
                    setIsOpen(false);
                    setQuery('');
                  }}
                >
                  <div className="font-medium">{character.playerName}</div>
                  {character.alias.length > 0 && (
                    <div className="text-sm text-gray-500 truncate">
                      别名：{character.alias.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;