const baseURL = "http://localhost:3001/api/v1"

export const fetchAllReservations = () => {
  return fetch(`${baseURL}/reservations`)
    .then(response => response.json())
    .then(resData => {
      return resData
    })
}
