'use client';

import { Button } from '@/components';
import { SingleChoiceGroup } from './SingleChoiceGroup';
import { MenuCategoriesItem } from '@/domain/Store/store.types';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MultiQuantityGroup } from './MultiQuantityGroup';

interface ProductItemsProps extends MenuCategoriesItem {
  storeName: string;
  storeImage: string;
}

const formSchema = z.object({
  selectedSizeId: z.string({
    required_error: 'Por favor, selecione um tamanho',
  }),
  selectedSizeItem: z.any().optional(),
  selectedRequiredItems: z
    .record(
      z.string(),
      z.record(
        z.string(),
        z.object({
          id: z.union([z.string(), z.number()]),
          quantity: z.number(),
          name: z.string(),
          price: z.number(),
        }),
      ),
    )
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ProductItems(props: ProductItemsProps) {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedSizeId: '',
      selectedSizeItem: undefined,
      selectedRequiredItems: {},
    },
  });

  const {
    formState: { errors },
    handleSubmit,
  } = methods;

  function onSubmit(data: FormValues) {
    console.log('ID selecionado:', data.selectedSizeId);
    console.log('Item completo:', data.selectedSizeItem);
    console.log('Itens obrigatórios:', data.selectedRequiredItems);

    // console.log('Itens obrigatórios (array):', requiredItemsArray);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {props.itemSizes.length > 0 && (
          <SingleChoiceGroup
            items={props.itemSizes}
            errorMessage={errors.selectedSizeId?.message}
          />
        )}

        {props.requiredGroups &&
          props?.requiredGroups?.length > 0 &&
          props.requiredGroups.map((requiredGroup) => {
            return (
              <MultiQuantityGroup
                key={requiredGroup.id}
                requiredGroup={requiredGroup.required}
                limitMinimumRequired={requiredGroup.limitMinimumRequired}
                limitMaximumRequired={requiredGroup.limitRequired}
                title={requiredGroup.name}
              />
            );
          })}

        <Button
          type="submit"
          className="fixed bottom-9 left-1/2 z-50 w-[80%] -translate-x-1/2 sm:w-[40%]"
        >
          Ver ticket
        </Button>
      </form>
    </FormProvider>
  );
}
