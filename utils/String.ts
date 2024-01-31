export async function capitaliseFirstLetter(
  inputString: string
): Promise<string> {
  return [...inputString.trim()][0].toUpperCase() + inputString.trim().slice(1);
}
