import { tv } from 'tailwind-variants';
import { Text } from '../Text/Text';

export const footerVariants = tv({
  slots: {
    root: ['bg-neutral-100'],
    container: [
      'container flex flex-col justify-center py-6',
      // 'container flex flex-col items-center justify-center gap-2 p-4',
      // 'md:flex-row md:justify-between',
    ],
    brandGroup: ['flex flex-col items-center gap-1', 'md:flex-row md:gap-4'],
  },
});

export function Footer() {
  const { root, container } = footerVariants();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={root()} role="contentinfo">
      <div className={container()}>
        <Text
          as="p"
          color="text-primary"
          className="mb-2 text-center"
          variant="ParagraphSmall"
          weight="bold"
        >
          feito com ♥ em maringá-PR
        </Text>
        <Text
          as="p"
          color="text-primary"
          weight="bold"
          variant="ParagraphSmall"
          className="text-center"
        >
          aiqfome.com © 2007-{currentYear} aiqfome LTDA.
        </Text>
        <Text
          as="p"
          color="text-primary"
          weight="bold"
          variant="ParagraphSmall"
          className="text-center"
        >
          CNPJ: 09.186.786/0001-58
        </Text>
      </div>
    </footer>
  );
}
