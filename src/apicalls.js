const key = 'dbFbcFSfd8GychfvZP9rmCTbBvsikGwD'

const handleError = (response) => {
  if(!response.ok) {
    throw `${response.status} ${response.statusText}`
  } else {
    return response.json()
  }
}

export const getArticles = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`, {
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(response => handleError(response))
}
