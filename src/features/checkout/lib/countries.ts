import { allowedCountries as aCountries } from '@/shared/lib/countries';

console.log('aCountries', aCountries);

export const allowedCountries = Object.values(aCountries).map(({ name }) => ({
  value: name,
  label: name,
}));
