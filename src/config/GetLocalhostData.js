const getDataFromLocalhost = (key) => {
  const locatStorageData = JSON.parse(localStorage.getItem(key));
  return locatStorageData;
};
export default getDataFromLocalhost;
