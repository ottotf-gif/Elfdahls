export function bildUrl(filnamn: string): string {
  const namn = filnamn.startsWith('/') ? filnamn : `/${filnamn}`;
  return namn;
}
