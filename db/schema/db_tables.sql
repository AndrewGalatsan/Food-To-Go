DROP TABLE IF EXISTS widgets CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS ordered_items CASCADE;


DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (255) NOT NULL,
  thumbnail_url VARCHAR (255) NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  category VARCHAR (255) NOT NULl
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
);

DROP TABLE IF EXISTS ordered_items CASCADE;
CREATE TABLE ordered_items (
  id SERIAL PRIMARY KEY NOT NULL,
  order_id INTEGER REFERENCES food_orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER REFERENCES menu_items(id),
  qty INTEGER NOT NULL
);

CREATE TABLE food_orders (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP,
  completed_at TIMESTAMP,
  customer_notes TEXT,
  status BOOLEAN NOT NULL DEFAULT FALSE );



// ordereditems will be linked to food_orders users table will be linked to food_orders
