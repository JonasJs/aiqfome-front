'use server';
import { Banner } from './banner.types';

function mockResponse(): Banner[] {
  return [
    {
      id: '1',
      url: '/assets/images/banner.png',
      alt: 'Banner colorido com colagem de duas figuras humanas segurando um hambúrguer à esquerda e um donut à direita, sobre um fundo roxo e amarelo. Texto em destaque: “rango barato no dia das crianças!” e “peça com até 50 % OFF”. No rodapé, observações “imagem ilustrativa” e “promoção por tempo limitado”.”',
      isActive: true,
    },
    {
      id: '2',
      url: '/assets/images/banner-aiqfome.png',
      alt: 'Banner promocional de verão',
      isActive: false,
    },
  ];
}

export async function fetchBanners(): Promise<Banner[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return mockResponse();
}
