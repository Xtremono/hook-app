import React from "react";
//import { memo } from "react";

export const Small = React.memo(({value}) => {
  return (
    <small>{ value }</small>
  )
})
