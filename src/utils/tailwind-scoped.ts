const tailwindScoped = (prefix: string) => (classes: string) =>
  classes
    .split(' ')
    .map((c) => `${prefix}:${c}`)
    .join(' ');

export const sm = tailwindScoped('sm');
export const md = tailwindScoped('md');

export default tailwindScoped;
