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

export function getColors(count: number, customColors: string[] = []): string[] {
  const predefinedColors: string[] = [
    "#653819", "#E66C37", "#12239E", "#6B007B", "#ff6fa9",
    "#E044A7", "#E7E0DB", "#D9B300", "#744EC2", "#643617",
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#FFD700", "#FF4500", "#2E8B57", "#8B0000",
    "#556B2F", "#008080", "#483D8B", "#DAA520", "#DC143C",
    "#00CED1", "#9400D3", "#228B22", "#FF6347", "#00FA9A",
    "#4682B4", "#D2691E", "#9ACD32", "#FA8072", "#7CFC00",
    "#B8860B", "#8A2BE2", "#32CD32", "#9932CC", "#B22222",
    "#5F9EA0", "#FF8C00", "#ADFF2F", "#7B68EE", "#00FF7F",
    "#D8BFD8", "#FFDAB9", "#F4A460", "#FF00FF", "#F08080",
    "#CD5C5C", "#8B008B", "#BC8F8F", "#DA70D6", "#8B4513",
    "#808000", "#20B2AA", "#778899", "#A0522D", "#8FBC8F",
    "#2F4F4F", "#696969", "#B0C4DE", "#FF69B4", "#FF1493",
    "#DB7093", "#7FFF00", "#6B8E23", "#FFB6C1", "#FFA07A",
    "#40E0D0", "#48D1CC", "#C71585", "#F0E68C", "#AFEEEE",
    "#ADD8E6", "#F5DEB3", "#98FB98", "#87CEEB", "#6495ED",
    "#4682B4", "#708090", "#FF4500", "#BDB76B", "#FFD700",
    "#DC143C", "#008B8B", "#7FFFD4", "#FF7F50", "#DDA0DD",
    "#8B0000", "#556B2F", "#008080", "#483D8B", "#DAA520",
    "#00CED1", "#9400D3", "#228B22", "#FF6347", "#00FA9A",
    "#4682B4", "#D2691E", "#9ACD32", "#FA8072", "#7CFC00",
    "#B8860B", "#8A2BE2", "#32CD32", "#9932CC", "#B22222"
  ];

  // Eliminar duplicados de los predefinidos si están en customColors
  const filteredPredefinedColors = predefinedColors.filter(color => !customColors.includes(color));

  // Combinar colores personalizados y los predefinidos filtrados
  let colors = [...customColors, ...filteredPredefinedColors];

  // Si no hay suficientes colores, generar aleatorios
  if (count > colors.length) {
    const generateRandomColor = (): string =>
      `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

    const extraColors = Array.from({ length: count - colors.length }, generateRandomColor);
    colors = [...colors, ...extraColors];
  }

  return colors.slice(0, count);
}

