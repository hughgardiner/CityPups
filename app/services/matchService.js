const BASE_URL = 'https://api.petfinder.com'
const PETFINDER_API_KEY = 'tvQEwjrEDobPO3WrTWXfvNXOIOeDzoDrVJQbrku05sph4AQjId'
const PETFINDER_SECRET_KEY = 'IwlEyRUY1sfi7NsApbqmILydkwBfyxA8x4TC9wkj'

export const authenticate = () => {
  requestBody = {
    grant_type: 'client_credentials', 
    client_id: PETFINDER_API_KEY,
    client_secret: PETFINDER_SECRET_KEY
  }
  return fetch(`${BASE_URL}/v2/oauth2/token`, {
    method: 'post',
    body: JSON.stringify(requestBody),
    headers: {
      'Content-type': 'application/json'
    }
  }).then(
    res => res.json()
  )
}

export const getPupMatches = (accessToken) => {
  return fetch(`${BASE_URL}/v2/animals?breed=Golden%20Retriever&location=22201`, {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      'authorization': `Bearer ${accessToken}`
    }
  }).then(
    res => res.json()
  )
}