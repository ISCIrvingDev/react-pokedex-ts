import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { CVDonwloadSection } from './components/CVDonwloadSection'
import { AboutMeSection } from './components/AboutMeSection'
import { GetInTouchSection } from './components/GetInTouchSection'
import { MockRepository } from './repositories/mock.repository'

export const ViewAbout: React.FC<{}> = () => {
  // Una vez implementado el repositorio "WebServiceBridgeRepository", cambiar el repositorio
  // const repository = new WebServiceBridgeRepository()
  const repository = new MockRepository()

  const [urlImg, setUrlImg] = useState('')
  const [urlCV, setUrlCV] = useState('')
  const [wasEmailSent, setWasEmailSent] = useState(false)

  useEffect(() => {
    repository.getUrlImg().then(
      res => {
        setUrlImg(res)
      }
      // err => console.log('Error: ', err)
    )

    repository.getUrlCV().then(
      res => {
        setUrlCV(res)
      }
      // err => console.log('Error: ', err)
    )
  }, [])

  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <CVDonwloadSection urlImg={urlImg} urlCV={urlCV}/>
      </Grid>

      <Grid item xs={12} sm={5}>
        <AboutMeSection/>
      </Grid>

      <Grid item xs={12} sm={3} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GetInTouchSection emitSend={({
          name,
          email,
          subject,
          message
        }) => {
          // console.log('Send to AWS SES')
          // console.log('name: ', name)
          // console.log('email: ', email)
          // console.log('subject: ', subject)
          // console.log('message: ', message)

          console.log('1) wasEmailSent: ', wasEmailSent)

          repository.sendEmail({
            name,
            email,
            subject,
            message
          }).then(
            res => {
              setWasEmailSent(res)
              console.log('2) wasEmailSent: ', res)
            }
            // err => console.log('Error: ', err)
          )
        }} />
      </Grid>
    </Grid>
  )
}
