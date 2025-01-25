import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export async function handleCopy(value: string) {
  try {
    await navigator.clipboard.writeText(value);

    //setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error('Error al copiar texto: ', err);
  }
}

export function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
