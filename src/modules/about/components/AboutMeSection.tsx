import React from 'react'
import { List, ListItem, ListItemIcon, Typography } from '@material-ui/core'
import { FiberManualRecord } from '@material-ui/icons'

export const AboutMeSection: React.FC<{}> = () => {
  return (
    <div>
      <Typography component="div">
        Hi there! I&apos;m Irving, I&apos;m a fullstack developer.
      </Typography>

      <Typography component="div">
        I have experience with several technologies, mainly JS based technologies:

        <List component="ul">
          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            ExpressJS
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            NestJS
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            Angular
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            Vue
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            React
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            .Net Core (.Net)
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            AWS
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            Flutter
          </ListItem>
        </List>
      </Typography>

      <Typography component="div">
        This app is powered by:

        <List component="ul">
          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            React 17
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            Typescript
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            Material UI 4
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            Axios
          </ListItem>

          <ListItem button onClick={() => window.open('https://pokeapi.co/', '_blank')}>
            <ListItemIcon>
              <FiberManualRecord style={{ fontSize: '0.7rem' }} />
            </ListItemIcon>

            PokeAPI
          </ListItem>
        </List>
      </Typography>
    </div>
  )
}
