import { Text } from '@/components';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background">
      <Text as="h1" color="text-primary">
        Exemplo 1
      </Text>
      <Text variant="HeadingLarge" weight="semibold" color="text-neutral-50">
        Exemplo 2
      </Text>
      <Text variant="HeadingMedium" color="text-neutral-100">
        Exemplo 3
      </Text>
      <Text variant="HeadingSmall" color="text-neutral-500">
        Exemplo 4
      </Text>

      <Text variant="ParagraphLarge" weight="normal" color="text-neutral-700">
        Exemplo 5
      </Text>
    </div>
  );
}
