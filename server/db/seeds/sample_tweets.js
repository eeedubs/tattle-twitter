
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {id: 1, messages: "Today's tasks: 1) chase stick, then chase tail; 2) receive many scratches from human; 3) bark at the mail man.", image_url: 'https://secure.i.telegraph.co.uk/multimedia/archive/02603/stick-dog_2603828b.jpg', liked: false},
        {id: 2, messages: "A hungry cat is looking for something to eat. She sees a little grey mouse sitting near his house. I want to catch that little mouse, says the hungry cat.", image_url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60', liked: false},
        {id: 3, messages: 'Finn. Noggin. Duuuuuuuuuuuude.', image_url: 'https://cdn3.webdamdb.com/1280_InuodxVApHQ3.jpg?1528680850', liked: false}
      ]);
    });
};
