import React from 'react';

const Btn = (props: any) => {

  const handleOnClick = (e: any) => {
    props.onClick(e)
  }

  return (
    <button onClick={handleOnClick}>click me</button>
  )
}

export default Btn
