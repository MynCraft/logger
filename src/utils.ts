export const rgbToAnsi = ({ r, g, b }: { r: number; g: number; b: number }) => {
  return `\x1b[38;2;${r};${g};${b}m`;
};

export const hexToRgb = (hex: string) => {
  if (hex.startsWith("#")) hex = hex.slice(1);

  if (hex.length === 3)
    hex = `${hex.at(0)?.repeat(2)}${hex.at(1)?.repeat(2)}${hex

      .at(2)

      ?.repeat(2)}`;

  hex = hex.toLowerCase();

  const r = parseInt(hex.slice(0, 2), 16);

  const g = parseInt(hex.slice(2, 4), 16);

  const b = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
};

export const colorize = (text: string, data: any) => {
  let coloredText;

  if (typeof data === "object" && typeof data !== "string") {
    coloredText = `${rgbToAnsi(data)}${text}\x1b[0m`;
  } else if (typeof data === "string") {
    coloredText = `${rgbToAnsi(hexToRgb(data))}${text}\x1b[0m`;
  } else throw Error("data type error");

  return coloredText;
};
