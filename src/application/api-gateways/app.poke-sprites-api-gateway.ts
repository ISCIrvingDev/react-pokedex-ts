import axios from 'axios'
import { AppInterceptors } from './app.interceptors'

export const AppPokeSpritesApiGateway = axios.create({
  baseURL: process.env.REACT_APP_POKE_SPRITES_API_GATEWAY,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${xxx}`
  },
  timeout: 10000
})

AppPokeSpritesApiGateway.interceptors.request.use(
  AppInterceptors.req,
  AppInterceptors.reqErr
)

AppPokeSpritesApiGateway.interceptors.response.use(
  AppInterceptors.res,
  AppInterceptors.resErr
)
