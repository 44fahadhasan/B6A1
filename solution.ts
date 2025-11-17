type FormatValueT = string | number | boolean;

function formatValue(value: FormatValueT): FormatValueT | undefined {
  if (typeof value === "string") return value.toUpperCase();
  if (typeof value === "number") return value * 10;
  if (typeof value === "boolean") return !value;
}

type GetLengthT = string | number[];

function getLength(value: GetLengthT): number | undefined {
  if (typeof value === "string") return value.length;
  if (Array.isArray(value)) return value.length;
}
