import { Button, Text } from '@/components';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-background">
      <div className="space-y-3">
        <Button size="large">ir para pagamento</Button>
        <Button size="medium">ir para pagamento</Button>
        <Button size="medium" variant="outline">
          ir para pagamento
        </Button>
        <Button disabled size="medium">
          ir para pagamento
        </Button>
        <Button variant="outline" size="xsmall">
          ir para pagamento
        </Button>
        <Button variant="text" size="xsmall">
          ir para pagamento
        </Button>
        <Button size="xsmall" variant="text" color="text-neutral-500">
          ir para pagamento
        </Button>
      </div>

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
