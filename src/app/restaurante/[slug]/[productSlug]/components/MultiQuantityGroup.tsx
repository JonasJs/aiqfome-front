'use client';

import { Counter, InfoBadge, Text } from '@/components';
import { RequiredItem } from '@/domain/Store/store.types';
import { formatMoney } from '@/utils/utils';
// import { useFormContext } from 'react-hook-form';

interface MultiQuantityGroupProps {
  requiredGroup: RequiredItem[];
  title?: string;
  errorMessage?: string;
  limitMinimumRequired: number;
  limitMaximumRequired: number;
}

export function MultiQuantityGroup({
  requiredGroup = [],
  title = 'acompanhamentos',
  limitMinimumRequired,
  limitMaximumRequired,
  errorMessage,
}: MultiQuantityGroupProps) {
  // const { register, setValue, watch } = useFormContext();
  // const selectedItems = watch('selectedRequiredItems') || {};

  return (
    <div className="border-b-4 border-neutral-100 py-4">
      <div className="mb-4 justify-between flex-align-center">
        <div>
          <Text
            variant="ParagraphMedium"
            weight="bold"
            color="text-neutral-700"
          >
            {title}
          </Text>
          {(limitMaximumRequired || limitMinimumRequired) && (
            <Text variant="ParagraphSmall" weight="semibold">
              escolha {limitMinimumRequired} de {limitMaximumRequired}
            </Text>
          )}
        </div>
        <InfoBadge>obrigatório</InfoBadge>
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
        {requiredGroup.length > 0 &&
          requiredGroup.map((group) => {
            return (
              <div key={group.id} className="justify-between flex-align-center">
                <Counter
                  value={0}
                  size="small"
                  onChange={() => console.log('')}
                  disabled={!!group.bloqued}
                  rightComponent={
                    <Text
                      variant="ParagraphSmall"
                      weight="semibold"
                      color="text-neutral-700"
                    >
                      {group.name}
                    </Text>
                  }
                />
                {group.price > 0 && (
                  <Text
                    variant="ParagraphSmall"
                    weight="semibold"
                    color="text-primary"
                  >
                    +R$ {formatMoney(group.price)}
                  </Text>
                )}
              </div>
            );
          })}
      </div>

      {errorMessage && (
        <Text
          variant="ParagraphSmall"
          color="text-red-500"
          className="mt-2 text-center"
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
