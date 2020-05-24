
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, origin: 'Final Fantasy 1'},
        {id: 2, origin: 'Final Fantasy 2'},
        {id: 3, origin: 'Final Fantasy 3'},
        {id: 4, origin: 'Final Fantasy 4'},
        {id: 5, origin: 'Final Fantasy 5'},
        {id: 6, origin: 'Final Fantasy 6'},
        {id: 7, origin: 'Final Fantasy 7'},
        {id: 8, origin: 'Final Fantasy 8'},
        {id: 9, origin: 'Final Fantasy 9'},
        {id: 1, origin: 'Final Fantasy 10'},
        {id: 2, origin: 'Final Fantasy 10-2'},
        {id: 3, origin: 'Final Fantasy 12'},
        {id: 1, origin: 'Final Fantasy 13'},
        {id: 2, origin: 'Final Fantasy 13-2'},
        {id: 3, origin: 'Final Fantasy 15'},
        {id: 3, origin: 'Final Fantasy BE'},
      ]);
    });
};
