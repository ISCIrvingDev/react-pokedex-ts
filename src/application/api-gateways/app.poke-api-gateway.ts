import axios from 'axios'
import { AppInterceptors } from './app.interceptors'

export const AppPokeApiGateway = axios.create({
  baseURL: process.env.REACT_APP_POKE_API_GATEWAY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${xxx}`
  },
  timeout: 10000
})

AppPokeApiGateway.interceptors.request.use(
  AppInterceptors.req,
  AppInterceptors.reqErr
)

AppPokeApiGateway.interceptors.response.use(
  AppInterceptors.res,
  AppInterceptors.resErr
)
