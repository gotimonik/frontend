import React from 'react'
import { Grid } from '@material-ui/core';

export default function Loader({width, height}) {
  return (
    <Grid container justifyContent={"center"} >
      <Grid item>
        <div className="spinner-container gray spinner-icon">
          <div className="ispinner gray spinner-icon animating" style={{ width: (width || 30), height: (height || 30)}}>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
            <div className="ispinner-blade"></div>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
