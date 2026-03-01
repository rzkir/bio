export const useFormattedTime = (): string => {
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
export function formatCount(n: number) {
  return n.toLocaleString();
}
