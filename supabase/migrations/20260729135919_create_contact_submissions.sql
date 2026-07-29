/*
# Create contact_submissions table

## Summary
This migration creates a table to store contact form submissions from visitors
of the Psk.Dan.Berkay Bulut coaching/counseling website.

## New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) - Full name of the person submitting
  - `email` (text, not null) - Email address
  - `phone` (text) - Optional phone number
  - `grade_level` (text) - Student grade/level (e.g. 11. Sınıf, Üniversite)
  - `primary_goal` (text) - Main reason for contact
  - `preferred_date` (text) - Preferred appointment date
  - `message` (text) - Additional message
  - `created_at` (timestamptz, default now())

## Security
- RLS enabled on contact_submissions
- anon + authenticated users can INSERT (public contact form, no login required)
- No SELECT/UPDATE/DELETE for public — data is for admin use only
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  grade_level text,
  primary_goal text,
  preferred_date text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);
