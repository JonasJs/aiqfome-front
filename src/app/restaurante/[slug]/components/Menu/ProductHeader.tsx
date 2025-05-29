import { Icon, Text } from '@/components';

interface ProductHeaderProps {
  name: string;
  description?: string;
  hasPromotion: boolean;
}

export function ProductHeader({
  name,
  description,
  hasPromotion,
}: ProductHeaderProps) {
  return (
    <div className="space-y-1">
      <div className="gap-1 flex-align-center">
        <Text
          as="h3"
          variant="HeadingSmall"
          weight="bold"
          color="text-neutral-700"
        >
          {name}
        </Text>
        {hasPromotion && <Icon name="discount" color="green-500" />}
      </div>
      {description && (
        <Text variant="ParagraphSmall" color="text-neutral-400">
          {description}
        </Text>
      )}
    </div>
  );
}
