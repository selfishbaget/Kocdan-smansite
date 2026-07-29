/*
# Tighten RLS on contact_submissions

## Summary
The previous INSERT policy used `WITH CHECK (true)`, which allowed any row
to be inserted regardless of content — effectively bypassing RLS. This
migration replaces it with a policy that validates the shape and size of
incoming contact-form submissions at the database boundary.

## Security changes
- Drop the old `anon_insert_contact` policy.
- Recreate it scoped to `anon, authenticated` (public contact form, no login).
- WITH CHECK now enforces:
  - `name` is a non-empty string of at most 200 characters
  - `email` is a non-empty string of at most 200 characters
  - `message` (when provided) is at most 5000 characters
  - `phone`, `grade_level`, `primary_goal`, `preferred_date` (when provided) are at most 200 characters
- No SELECT / UPDATE / DELETE policies: table contents remain admin-only.

## Notes
1. This is a public contact form with no sign-in screen, so anon INSERT
   access is intentional and required for the form to function.
2. The WITH CHECK clause is NOT `true` — it validates required fields and
   length limits, so it no longer bypasses RLS.
*/

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;

CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL
  AND char_length(name) BETWEEN 1 AND 200
  AND email IS NOT NULL
  AND char_length(email) BETWEEN 1 AND 200
  AND (message IS NULL OR char_length(message) <= 5000)
  AND (phone IS NULL OR char_length(phone) <= 200)
  AND (grade_level IS NULL OR char_length(grade_level) <= 200)
  AND (primary_goal IS NULL OR char_length(primary_goal) <= 200)
  AND (preferred_date IS NULL OR char_length(preferred_date) <= 200)
);
