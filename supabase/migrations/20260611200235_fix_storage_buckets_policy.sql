-- Allow public to see the images bucket (required for dashboard and client access)
CREATE POLICY "allow_public_select_buckets" ON storage.buckets
  FOR SELECT
  TO public
  USING (id = 'images');