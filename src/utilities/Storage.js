export const getItemsFromStorage = (itemName) => JSON.parse(localStorage.getItem(itemName));

export const saveItemsToStorage = (itemName, item) => {
  localStorage.setItem(itemName, JSON.stringify(item));
};

export const getLengthOfItem = (itemName) => {
  const item = JSON.parse(localStorage.getItem(itemName));
  return item ? item.length : 0;
};