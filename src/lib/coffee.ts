export const ratio = (dose: number, coffeeYield: number) => `1:${(coffeeYield / dose).toFixed(1)}`;

export const recipe = (
  dose: number,
  coffeeYield: number,
  time?: number,
  yieldUnit: 'g' | 'ml' = 'g',
) => {
  const parts = [`${dose}g → ${coffeeYield}${yieldUnit}`];
  if (time !== undefined) parts.push(`${time}s`);
  if (yieldUnit === 'g') parts.push(ratio(dose, coffeeYield));
  return parts.join(' · ');
};

export const beanSlug = (beans: string) =>
  beans
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export const formatDate = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
