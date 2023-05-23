export default function specialAttackOptions(obj) {
  const array = [];
  for (const item of obj.special) {
    const {
      id, name, icon, description = 'Описание не доступно',
    } = item;
    array.push({
      id,
      name,
      icon,
      description,
    });
  }
  return array;
}
