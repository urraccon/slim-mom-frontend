export function calculateProductCalories(item) {
  return (item.product.calories / item.product.weight) * item.quantity;
}

export const calculateTotalCalories = (entries) => {
  return entries.reduce(
    (sum, entrie) => sum + calculateProductCalories(entrie),
    0
  );
};
