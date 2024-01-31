export async function getCurrentFormattedDate() {
  return new Date().toLocaleDateString("en-gb", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
