import React, { useState } from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { IDtoSendEmail } from '../send-email.dto'

interface IProps {
  emitSend: (dtoSendEmail: IDtoSendEmail) => void;
}

export const GetInTouchSection: React.FC<IProps> = ({ emitSend }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Card elevation={5}>
      <CardContent>
        <form noValidate autoComplete="off">
          <Grid
            container
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography variant="h4" align='center' gutterBottom>
                Get in touch
              </Typography>
            </Grid>

            <Grid item>
              {
                true
                  ? <TextField
                    fullWidth={true}
                    required
                    label="Your name"
                    variant="outlined"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                  />
                  : <TextField
                    fullWidth={true}
                    error
                    required
                    label="Your name"
                    helperText="Mensaje de error"
                    variant="outlined"
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)}
                  />
              }
            </Grid>

            <Grid item>
              {
                true
                  ? <TextField
                    fullWidth={true}
                    required
                    type="email"
                    label="Your email"
                    variant="outlined"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                  />
                  : <TextField
                    fullWidth={true}
                    error
                    required
                    type="email"
                    label="Your email"
                    helperText="Mensaje de error"
                    variant="outlined"
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                  />
              }
            </Grid>

            <Grid item>
              {
                true
                  ? <TextField
                    fullWidth={true}
                    required
                    label="Subject"
                    variant="outlined"
                    value={subject}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)}
                  />
                  : <TextField
                    fullWidth={true}
                    error
                    required
                    label="Subject"
                    helperText="Mensaje de error"
                    variant="outlined"
                    value={subject}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSubject(event.target.value)}
                  />
              }
            </Grid>

            <Grid item>
              {
                true
                  ? <TextField
                    fullWidth={true}
                    required
                    label="Message"
                    variant="outlined"
                    value={message}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
                  />
                  : <TextField
                    fullWidth={true}
                    error
                    required
                    label="Message"
                    helperText="Mensaje de error"
                    variant="outlined"
                    value={message}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
                  />
              }
            </Grid>

            <Grid item>
              <Button
                fullWidth={true}
                variant="contained"
                color="primary"
                endIcon={<Send />}
                onClick={() => emitSend({
                  name,
                  email,
                  subject,
                  message
                })}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}
