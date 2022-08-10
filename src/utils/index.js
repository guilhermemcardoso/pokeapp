export function capitalizeName(name) {
  if (!name || name.length === 0) {
    return '';
  }
  return `${name[0].toUpperCase()}${name.slice(1)}`;
}

export function formatNumber(value) {
  return value > 9 ? value.toString() : `0${value}`;
}
