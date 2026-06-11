const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const BUCKET = 'images';

export function bildUrl(filnamn: string): string {
  const namn = filnamn.startsWith('/') ? filnamn.slice(1) : filnamn;
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${namn}`;
}
