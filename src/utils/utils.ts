'use server';
export async function formatMoney(cents: number) {
  if (typeof cents !== 'number') {
    throw new Error('format() only accepts a number as a parameter');
  }

  return cents
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
