/* eslint-disable no-console */
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export const AppInterceptors = {
  req: (config: AxiosRequestConfig<unknown>) => {
    // console.log('Configuracion del request: ', config)

    return config
  },
  reqErr: (err: unknown) => {
    // console.log('Request error: ', err)

    return Promise.reject(err)
  },
  res: (res: AxiosResponse<unknown, unknown>) => { // Status == 2xx
    // console.log('Respuesta: ', res)

    return res
  },
  resErr: (err: unknown) => { // Status != 2xx
    // console.log('Response error: ', err)

    Promise.reject(err)
  }
}
