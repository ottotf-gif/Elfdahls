-- Drop existing restrictive policies
DROP POLICY IF EXISTS "public_read_images" ON storage.objects;
DROP POLICY IF EXISTS "authenticated_upload_images" ON storage.objects;
DROP POLICY IF EXISTS "authenticated_update_images" ON storage.objects;
DROP POLICY IF EXISTS "authenticated_delete_images" ON storage.objects;

-- Allow anyone to read from the images bucket
CREATE POLICY "allow_public_read_images" ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'images');

-- Allow anyone to upload to the images bucket (needed for dashboard + anon access)
CREATE POLICY "allow_public_insert_images" ON storage.objects
  FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'images');

-- Allow anyone to update in the images bucket
CREATE POLICY "allow_public_update_images" ON storage.objects
  FOR UPDATE
  TO public
  USING (bucket_id = 'images')
  WITH CHECK (bucket_id = 'images');

-- Allow anyone to delete from the images bucket
CREATE POLICY "allow_public_delete_images" ON storage.objects
  FOR DELETE
  TO public
  USING (bucket_id = 'images');