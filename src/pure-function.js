personHealth({name: 'Маг', health: 50});

export default function personHealth(param) {
  let {name, health} = param;

  if (health >= 51) {
    return 'healthy';
  }
  if (50 >= health && health >= 15 ) {
    return 'wounded';
  }
  if (15 > health && health > 0 ) {
    return 'critical';
  }
}
