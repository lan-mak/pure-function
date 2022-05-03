export default function personHealth(param) {
  if (param.health >= 51) {
    return 'healthy';
  }
  if (param.health <= 50 && param.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}

personHealth({ name: 'Маг', health: 50 });
