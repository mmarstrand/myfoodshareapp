export function getFromLocalStorage(createData) {
  return JSON.parse(localStorage.getItem(createData));
}

export function setToLocalStorage(createData, showData) {
  localStorage.setItem(createData, JSON.stringify(showData));
}
