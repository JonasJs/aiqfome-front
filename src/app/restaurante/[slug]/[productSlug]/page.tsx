import { Metadata } from 'next';
import Image from 'next/image';
import * as productActions from '../actions';
import { Breadcrumb, Button, InfoBadge, Text, Textarea } from '@/components';
import { getstoreStatus } from '../components/DeliveryDetails/DeliveryDetails';
import { tv } from 'tailwind-variants';

import { ProductItems } from './components/ProductItems';

interface ProductPageProps {
  params: Promise<{ slug: string; productSlug: string }>;
}

export const productPageVariants = tv({
  slots: {
    content: ['container px-4'],
  },
  variants: {
    isProductAvailable: {
      true: {
        content: [''],
      },
      false: {
        content: ['pointer-events-none opacity-35'],
      },
    },
  },
});

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const product = await productActions.findProductBySlug(slug, productSlug);

  return {
    title: `aiqfome - ${product?.name}` || 'aiqfome',
    description: product?.description || 'aiqfome',
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, productSlug } = await params;
  const product = await productActions.findProductBySlug(slug, productSlug);

  if (!product) {
    return <p>Produto não encontrado</p>;
  }

  const availableCount = product.itemSizes.filter(
    (s) => s.available && s.price != null,
  ).length;

  const breadcrumbItems = [
    { label: 'Início', href: '/' },
    { label: product.store.name, href: `/restaurante/${slug}` },
    { label: product.name, href: `/restaurante/${slug}/${productSlug}` },
  ];

  const storeStatus = (() =>
    getstoreStatus(product.store.openingTime, product.store.closingTime))();

  const isProductAvailable = product.available && availableCount > 0;

  const { content } = productPageVariants({
    isProductAvailable,
  });

  return (
    <div className="mb-5">
      <div className="container md:px-4">
        <div className="relative aspect-[390/130] min-h-[195px] w-full overflow-hidden md:mt-2 md:rounded-lg">
          <InfoBadge type="highlight" className="absolute left-4 top-4 z-10">
            {storeStatus}
          </InfoBadge>
          <Image
            src="https://files.aiqfome.com/restaurantes/cover/cb2b9781-e1b4-4143-8aeb-00cea2648996/restaurante_cover_20210504115305.jpg"
            alt="als"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className={content()}>
        <Breadcrumb items={breadcrumbItems} className="m-1 hidden lg:block" />
        <div className="mt-2">
          <Text variant="HeadingSmall" weight="bold" color="text-neutral-700">
            {product.name}
          </Text>
          <div className="gap-2 flex-align-center">
            <Text
              variant="ParagraphSmall"
              weight="extrabold"
              color="text-neutral-700"
            >
              a partir de
            </Text>
            <Text
              variant="ParagraphLarge"
              weight="extrabold"
              color="text-primary"
            >
              R$ 19,90
            </Text>
          </div>
          <Text variant="ParagraphSmall">{product.description}</Text>
        </div>
        <div className="justify-between border-b-4 border-neutral-100 py-5 flex-align-center">
          <div>
            <Text
              variant="ParagraphMedium"
              weight="bold"
              color="text-neutral-700"
            >
              quantos?
            </Text>
            <div className="gap-1 flex-align-center">
              <Text variant="ParagraphSmall" weight="semibold">
                total
              </Text>
              <Text
                variant="ParagraphSmall"
                weight="bold"
                color="text-neutral-700"
              >
                R$ 19,90
              </Text>
            </div>
          </div>
          <Button size="medium">adicionar</Button>
        </div>
        <ProductItems
          name={product.name}
          storeName={product.store.name}
          storeImage={product.store.virtualAvatar.default}
          id={product.id}
        />

        <div className="mt-4">
          <Textarea
            rows={3}
            placeholder={`alguma observação do item? • opcional\nex: tirar algum ingrediente, ponto do prato`}
          ></Textarea>
        </div>
      </div>
    </div>
  );
}
