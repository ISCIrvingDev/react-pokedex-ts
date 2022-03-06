import { IDtoSendEmail } from '../send-email.dto'
import { IRepositoryCVDonwloadSection, IRepositoryGetInTouchSection } from './repository'

// MockRepositoryCVDonwloadSection
export class MockRepository implements IRepositoryCVDonwloadSection, IRepositoryGetInTouchSection {
  getUrlImg (): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(process.env.REACT_APP_FRAMEWORK_ICON || ''), 1000)
    })
  }

  getUrlCV (): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(process.env.REACT_APP_FRAMEWORK_ICON || ''), 1000)
    })
  }

  sendEmail (dtoSendEmail: IDtoSendEmail): Promise<boolean> {
    // Envia el correo
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 1000)
    })
  }
}

// export class MockRepositoryGetInTouchSection implements IRepositoryGetInTouchSection {
//   sendEmail (dtoSendEmail: IDtoSendEmail): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(true), 1000)
//     })
//   }
// }
