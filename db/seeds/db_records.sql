INSERT INTO menu_items (name, thumbnail_url, price, description, category)
  VALUES ('Americano', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/black_coffee.png?raw=true', 399, 'Brewed fresh black coffee styled as an Americano using high quality Brazilian beans.', 'dessert'),
          ('Cheese Cake Slice', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/cheesecake.png?raw=true', 599, 'High quality Italian made strawberry styled Cheesecake.', 'dessert'),
          ('Lemon Cake', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/lemon_cake.png?raw=true', 599, 'Classic North American-styled Lemon Cake.', 'dessert'),
          ('Black Tea', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/tea.png?raw=true', 399, 'Freshly brewed black tea.', 'dessert'),
          ('Burger', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/burger.png?raw=true', 699, 'Burger made using organic grass-fed beef and high quality cheddar.', 'main'),
          ('Greek Salad', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/greek_salad.png?raw=true', 599, 'Freshly made Greek-style salad using important Feta cheese from Greece.', 'main'),
          ('Large Pepperoni Pizza', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/peparoni_pizza.png?raw=true', 1599, 'Classic pepperoni pizza.', 'main'),
          ('Perogies', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/perogies.png?raw=true', 799, 'Bowl of freshly made Perogies..', 'main'),
          ('Classic Poutine', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/poutine.png?raw=true', 899, 'Freshly chopped potatoes and made cheese curds styled into a classic poutine bowl.', 'main'),
          ('Ceasar Salad', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/salad.png?raw=true', 499, 'Classic and simple Ceasar salad.', 'main'),
          ('Cream Cheese Bagel', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/bagel.png?raw=true', 499, 'Breakfast bagel with creamcheese.', 'breakfast'),
          ('Bowl of fruit', 'https://github.com/AndrewGalatsan/Food-To-Go/blob/master/public/images/fruit.png?raw=true', 499, 'Bowl of fruit', 'breakfast');

INSERT INTO orders (name, phone, customer_notes)
  VALUES ('Bob', '6478805234', 'extra cream cheese'),
  ('John', '6478805276', 'extra steamed'),
  ('Mike', '4168805222', 'no ceasar sauce');

INSERT INTO ordered_items (order_id, menu_item_id, menu_item_name, qty)
  VALUES (1, 11, 'Cream Cheese Bagel', 2),
          (2, 4,'Black Tea', 2),
          (3, 10, 'Ceasar Salad', 1);
