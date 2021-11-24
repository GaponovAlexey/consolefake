import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
  display: flex;
  color: black;
  background-color: grey;
  justify-content: end;
`


export const Footer = () => {
  return (
    <Foot>
      <a href='https://github.com/kekelberi/stcomponents' >rep</a>
    </Foot>
  )
}
