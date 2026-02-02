-- Create community utilities table
CREATE TABLE IF NOT EXISTS communityUtils (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  map VARCHAR(50) NOT NULL,
  side VARCHAR(10) NOT NULL,
  site VARCHAR(50) NOT NULL,
  type VARCHAR(50) NOT NULL,
  mouse_click VARCHAR(50),
  stance VARCHAR(50),
  movement VARCHAR(50) NOT NULL,
  video_url TEXT NOT NULL,
  description TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
