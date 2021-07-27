import React from 'react'
import { Grid, ListItem, ListItemText, ListItemAvatar, Avatar } from "@material-ui/core";

export default function Record(props) {
  const { data } = props;
  console.log(`data`, data)
  return (
    <ListItem>
      <ListItemAvatar style={{ marginRight: 15 }}>
        <Avatar style={{ height: 62, width: 62 }} src={`${require('../../assets/images/default-avatar-light-mode.png')}`} />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Grid className={`user-name medium-font-15`} >
            {< div
              style={{ color: "#a9a9a9", fontSize: "13px" }}>{data.nameGP}</div>}
            <div >
              <span>{data.nameCompany}</span>
              <span style={{ color: "#606060", fontWeight: 'bold' }}> {data.city}</span>
            </div>
          </Grid >
        }
        secondary={
          < Grid container >
          </Grid >
        }
        secondaryTypographyProps={{
          'component': 'div'
        }}
      />
    </ListItem >
  )
}