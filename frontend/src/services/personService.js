import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}/persons`

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data)
}

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`, { data: { id: id } })
}

const update = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data)
}

export default { getAll, create, remove, update }
