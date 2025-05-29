import { IconName } from '@/components/Icon/Icon.types';

/**
 * Analisando o contrato do site identifiquei que os valores de observações são:
 * 0 apimentado
 * 1 vegano
 * 2 alcool
 * 3 doce
 * 4 sem glúten
 */

export type Observation = {
  icon: IconName;
  ariaLabel: string;
};

export type ObservationsMap = Record<string, Observation>;

export const observationsMap: ObservationsMap = {
  '0': {
    icon: 'spicy',
    ariaLabel: 'Produto apimentado',
  },
  '1': {
    icon: 'vegan',
    ariaLabel: 'Produto vegano',
  },
  '3': {
    icon: 'candy',
    ariaLabel: 'Produto doce',
  },
  '4': {
    icon: 'glutenFree',
    ariaLabel: 'Produto sem glúten',
  },
};
