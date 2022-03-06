import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Avatar, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '50%',
      height: 'auto',
      border: '1px outset',
      margin: '1rem auto'
    }
  })
)

interface IProps {
  urlImg: string;
  urlCV: string;
}

export const CVDonwloadSection: React.FC<IProps> = ({ urlImg, urlCV }) => {
  const classes = useStyles()

  return (
    <div>
      <Typography
        component="div"
        align='center'
      >
        <Avatar className={classes.root} alt="Irving Salazar" src={urlImg} />
      </Typography>

      <Typography
        component="div"
        align='center'
      >
        <Typography
          component="span"
          style={{ color: '#2193b0', cursor: 'pointer' }}
          onClick={() => window.open('mailto:ISCIrvingDev@gmail.com?body=Hi%20there%20buddy!%0ATell%20me,%20how%20can%20I%20help%20you?', '_blank')}
        >
          ISCIrvingDev@gmail.com
        </Typography>
      </Typography>

      <Typography component="div" align='center'>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(urlCV, '_blank')}
        >
          Download CV
        </Button>
      </Typography>
    </div>
  )
}
