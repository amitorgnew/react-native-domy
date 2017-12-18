export default function onDelete(index) {
  return {
    type: 'Delete',
    payload: index,
  };
}
export function onImportant(index) {
  return {
    type: 'Important',
    payload: index,
  };
}
export function onAdd(values) {
  return {
    type: 'Add',
    payload: values,
  };
}
export function onEdit(values) {
  return {
    type: 'Edit',
    payload: values,
  };
}
