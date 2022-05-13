//@ts-check
export function useLocalStorage(/**@type {string} */ itemName) {
  const setStorage = (/**@type {any}  */ itemToSet) => {
    localStorage.setItem(itemName, JSON.stringify(itemToSet));
  };
  const getStorage = (/**@type {string}  */ itemToget) => {
    return JSON.parse(localStorage.getItem(itemToget || itemName));
  };
  const deleteStorageItem = (/**@type {string} */ itemToDelete) => {
    return localStorage.removeItem(itemName || itemToDelete);
  };
  const clearStorage = () => {
    return localStorage.clear();
  };
  return {
    setStorage,
    getStorage,
    deleteStorageItem,
    clearStorage
  };
}
