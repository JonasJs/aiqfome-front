import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { tv } from 'tailwind-variants';
import { Icon } from '../Icon/Icon';

const accordionVariants = tv({
  slots: {
    root: '',
    item: [
      'cursor-pointer',
      'border-container-95 border-b-4 border-neutral-100 last:border-b-0',
    ],
    trigger: [
      'group flex flex-1 items-start justify-between gap-4 rounded-md py-3 text-left text-sm font-medium transition-all',
      'focus-visible:ring-ring/50 focus-visible:border-ring outline-none focus-visible:ring-[2px]',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&[data-state=open]>svg]:rotate-180',
    ],
    header: 'flex',
    content: [
      'overflow-hidden text-sm',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
    ],
    contentInner: 'pb-4 pt-0',
  },
});

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  const { root } = accordionVariants();
  return <AccordionPrimitive.Root className={root({ className })} {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  const { item } = accordionVariants();
  return <AccordionPrimitive.Item className={item({ className })} {...props} />;
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  const { trigger, header } = accordionVariants();
  return (
    <AccordionPrimitive.Header className={header()}>
      <AccordionPrimitive.Trigger className={trigger({ className })} {...props}>
        {children}
        <Icon
          name="chevron-down"
          size={20}
          className="transform transition-transform duration-200 group-data-[state=open]:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  const { content, contentInner } = accordionVariants();
  return (
    <AccordionPrimitive.Content className={content()} {...props}>
      <div className={contentInner({ className })}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
