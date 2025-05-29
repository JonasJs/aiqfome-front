import { tv } from 'tailwind-variants';
import { Brand } from '../Brand/Brand';
import { DeliveryInfo } from '../DeliveryInfo/DeliveryInfo';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';

export const headerVariants = tv({
  slots: {
    root: ['bg-primary'],
    container: [
      'container flex flex-col gap-4 p-4',
      'md:flex-row md:items-center md:justify-between md:gap-6',
    ],
    navigationGroup: [
      'justify-between flex-align-center',
      'md:flex-none md:justify-start md:gap-6',
    ],
    brandGroup: ['gap-6 flex-align-center'],
    searchForm: ['w-full', 'md:max-w-[500px] md:flex-1'],
    userAction: ['flex justify-end', 'md:flex-none'],
  },
  variants: {
    visibility: {
      mobile: {
        userAction: 'flex md:hidden',
      },
      desktop: {
        userAction: 'hidden md:flex',
      },
    },
  },
});

export function Header() {
  const {
    root,
    container,
    navigationGroup,
    brandGroup,
    searchForm,
    userAction,
  } = headerVariants();

  return (
    <header className={root()} role="banner">
      <div className={container()}>
        <nav className={navigationGroup()} aria-label="Navegação principal">
          <div className={brandGroup()}>
            {/* TODO: No desktop adicionar a logo wordmark */}
            <Brand
              variant="icon"
              color="white"
              aria-label="AIQ - Página inicial"
            />
            <DeliveryInfo address="Rua Mandaguari, 198" />
          </div>
          <div className={userAction({ visibility: 'mobile' })}>
            <button
              aria-label="Abrir menu do usuário"
              type="button"
              className="leading-none"
            >
              <Icon name="user" color="white" aria-hidden="true" />
            </button>
          </div>
        </nav>

        <form
          role="search"
          className={searchForm()}
          aria-label="Buscar lojas e culinárias"
        >
          <label htmlFor="header-search" className="sr-only">
            Buscar pela loja ou culinária
          </label>
          <Input
            id="header-search"
            icon="search"
            placeholder="busque pela loja ou culinária"
            type="search"
          />
        </form>
        <div className={userAction({ visibility: 'desktop' })}>
          <button
            aria-label="Abrir menu do usuário"
            type="button"
            className="leading-none"
          >
            <Icon name="user" color="white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
