import { IDtoSendEmail } from '../send-email.dto'

export interface IRepositoryCVDonwloadSection {
  getUrlImg: () => Promise<string>;
  getUrlCV: () => Promise<string>;
}

export interface IRepositoryGetInTouchSection {
  sendEmail: (dtoSendEmail: IDtoSendEmail) => Promise<boolean>;
}
