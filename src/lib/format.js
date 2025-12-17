export function joinList(arr = []) {
  return arr.filter(Boolean).join(" • ");
}
