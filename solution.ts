type FormatValueT = string | number | boolean;

function formatValue(value: FormatValueT): FormatValueT | undefined {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
}
