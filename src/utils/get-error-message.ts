export function getErrorMessage(error: unknown) {
  if (error instanceof Error) throw error;
  return String(error);
}
