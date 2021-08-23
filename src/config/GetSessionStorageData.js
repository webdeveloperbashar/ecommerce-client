const getDataFromSession = (key) => {
  const sessionData = JSON.parse(sessionStorage.getItem(key));
  return sessionData;
};
export default getDataFromSession;
