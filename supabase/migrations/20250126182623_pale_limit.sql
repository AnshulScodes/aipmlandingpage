/*
  # Create waitlist table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required, unique)
      - `company_size` (text, required)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for inserting new entries
    - Add policy for admins to view all entries
*/

-- Create the waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    email text NOT NULL UNIQUE,
    company_size text NOT NULL,
    created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert
CREATE POLICY "Allow public to insert into waitlist"
    ON waitlist
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create policy to allow authenticated users to view all entries
CREATE POLICY "Allow authenticated users to view waitlist"
    ON waitlist
    FOR SELECT
    TO authenticated
    USING (true);