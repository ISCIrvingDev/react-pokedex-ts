// Este va a ser el repositorio para el uso del servicio "Web Service Bridge"

import { IDtoSendEmail } from '../send-email.dto'
import { IRepositoryCVDonwloadSection, IRepositoryGetInTouchSection } from './repository'

export class WebServiceBridgeRepository implements IRepositoryCVDonwloadSection, IRepositoryGetInTouchSection {
  getUrlImg (): Promise<string> {
    throw new Error('Method not implemented yet!')
  }

  getUrlCV (): Promise<string> {
    throw new Error('Method not implemented yet!')
  }

  sendEmail (dtoSendEmail: IDtoSendEmail): Promise<boolean> {
    // Envia el correo
    throw new Error('Method not implemented yet!')
  }
}
