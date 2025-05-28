import { Button, Icon, Text } from '@/components';
import Image from 'next/image';

interface HeaderStoreProps {
  name: string;
  image: string;
}

export function HeaderStore({ name, image }: HeaderStoreProps) {
  return (
    <div className="flex-wrap gap-3 flex-align-center">
      <div className="sm:wap-1 w-full gap-2 flex-align-center sm:w-auto">
        <div className="relative h-9 w-9 rounded border border-neutral-100 bg-neutral-50">
          <Image src={image} alt={name} fill priority />
        </div>
        <Text
          as="h1"
          weight="extrabold"
          variant="HeadingSmall"
          color="text-neutral-900"
        >
          {name}
        </Text>
      </div>
      <div className="gap-3 flex-align-center">
        <Icon name="share" color="primary" />
        <Icon name="heart" color="primary" />
      </div>
      <div className="flex flex-1 justify-end">
        <Button
          color="text-teal-400"
          variant="text"
          size="medium"
          rightComponent={
            <Icon name="arrow-right" color="teal-400" size={10}></Icon>
          }
        >
          mais infos
        </Button>
      </div>
    </div>
  );
}
