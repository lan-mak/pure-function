import personHealth from '../pure-function';

test.each([
  ['healthy', { name: 'Маг', health: 90 }],
  ['wounded', { name: 'Маг', health: 44 }],
  ['critical', { name: 'Маг', health: 10 }],
])('test health %s', (status, person) => {
  const result = personHealth(person);
  expect(result).toBe(status);
});
