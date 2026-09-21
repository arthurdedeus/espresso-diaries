export const ratio = (dose: number, coffeeYield: number) => `1:${(coffeeYield / dose).toFixed(1)}`;
export const recipe = (dose: number, coffeeYield: number, time: number) => `${dose}g → ${coffeeYield}g · ${time}s · ${ratio(dose, coffeeYield)}`;
export const beanSlug = (beans: string) => beans.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
export const formatDate = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' });
