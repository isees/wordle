import { formatBounty } from './CharacterRow';
import { getBountyColor, relationToText } from '@/lib/utils';
import { CompareResult } from '@/types';

const AttributeCompare = ({ result }: { result: CompareResult }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className={`p-2 ${result.gender ? 'bg-green-100' : 'bg-red-100'}`}>
        性别: {result.gender ? '✓' : '✗'}
      </div>
      <div className={`p-2 ${getBountyColor(result.bounty.relation)}`}>
        赏金: {formatBounty(result.bounty.value)} ({relationToText(result.bounty.relation)})
      </div>
      {/* 其他属性... */}
    </div>
  );
};