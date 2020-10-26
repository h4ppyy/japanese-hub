CREATE TABLE IF NOT EXISTS accounts (
  id SERIAL PRIMARY KEY,
  account VARCHAR(255) UNIQUE NOT NULL,
  msg VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  jlpt INT NOT NULL,
  level INT DEFAULT 0,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL,
  user_id INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS post_unit (
  id SERIAL PRIMARY KEY,
  post_id INT NOT NULL,
  kanji VARCHAR(255),
  hiragana VARCHAR(255),
  katakana VARCHAR(255),
  hangul VARCHAR(255),
  english VARCHAR(255),
  user_id INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS problem (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  link VARCHAR(255),
  content VARCHAR(255),
  user_id INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS problem_unit (
  id SERIAL PRIMARY KEY,
  problem_id INT NOT NULL,
  question VARCHAR(255) NOT NULL,
  answer1 VARCHAR(255) NOT NULL,
  answer2 VARCHAR(255) NOT NULL,
  answer3 VARCHAR(255) NOT NULL,
  answer4 VARCHAR(255) NOT NULL,
  solution int NOT NULL,
  user_id INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS problem_solve (
  id SERIAL PRIMARY KEY,
  unit_id INT NOT NULL,
  correct BOOLEAN NOT NULL,
  user_id INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS file (
  id SERIAL PRIMARY KEY,
  type VARCHAR(10) NOT NULL,
  type_id int NOT NULL,
  raw_name VARCHAR(255) NOT NULL,
  enc_name VARCHAR(255) NOT NULL,
  ext VARCHAR(255),
  raw_size INT NOT NULL,
  format_size VARCHAR(255),
  save_path VARCHAR(255),
  user_id INT NOT NULL,
  deleted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT now() NOT NULL,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP
);