'use client';

import { Mode, Audience } from '@/types';

interface ToggleBarProps {
  mode: Mode;
  audience: Audience;
  onModeChange: (mode: Mode) => void;
  onAudienceChange: (audience: Audience) => void;
}

const modes: { value: Mode; label: string }[] = [
  { value: 'story', label: 'Story' },
  { value: 'qa', label: 'Q&A' },
];

const audiences: { value: Audience; label: string }[] = [
  { value: 'kids', label: 'Kids' },
  { value: 'general', label: 'All' },
  { value: 'expert', label: 'Expert' },
];

export default function ToggleBar({
  mode,
  audience,
  onModeChange,
  onAudienceChange,
}: ToggleBarProps) {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 p-3 sm:p-5 bg-[#FFFBF5] border-b border-[#E5DCD0]">
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-xs sm:text-sm text-[#8B7B70] font-medium">Mode:</span>
        <div className="flex bg-[#EDE6D9] rounded-lg sm:rounded-xl p-1">
          {modes.map((m) => (
            <button
              key={m.value}
              onClick={() => onModeChange(m.value)}
              className={`px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all duration-300 ${
                mode === m.value
                  ? 'bg-[#FFFBF5] text-[#7A1F1F] shadow-sm'
                  : 'text-[#5C4F46] hover:text-[#2D2420]'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <span className="text-xs sm:text-sm text-[#8B7B70] font-medium">Audience:</span>
        <div className="flex bg-[#EDE6D9] rounded-lg sm:rounded-xl p-1">
          {audiences.map((a) => (
            <button
              key={a.value}
              onClick={() => onAudienceChange(a.value)}
              className={`px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all duration-300 ${
                audience === a.value
                  ? 'bg-[#FFFBF5] text-[#7A1F1F] shadow-sm'
                  : 'text-[#5C4F46] hover:text-[#2D2420]'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
