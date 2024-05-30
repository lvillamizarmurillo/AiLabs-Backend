use('aiLabs');
db.user.insertMany([
  {
    email: 'admin@gmail.com',
    password: '123',
    rol: 'admin'
  },
  {
    email: 'otro_admin@gmail.com',
    password: '321',
    rol: 'user'
  }
]);