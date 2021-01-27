import React from 'react'
import styled from 'styled-components'

import UKAID_LOGO from '../../img/UKAID_LOGO.svg'
import A2EI_LOGO from '../../img/A2EI_LOGO.svg'
import CDC_LOGO from '../../img/CDC_LOGO.svg'
import ESMAP_LOGO from '../../img/ESMAP_LOGO.png'

const Container = styled.div`
  margin: ${({ theme }) => `${theme.space[2]}px`};
  padding: ${({ theme }) => `${theme.space[2]}px`};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  display: flex;
  gap: ${({ theme }) => `${theme.space[3]}px`};
  justify-content: space-between;
  align-items: center;
`

export default function Credits() {
  return (
    <Container>
      <img alt='UK aid' src={UKAID_LOGO} height={50} />
      <img alt='CDC Group plc' src={CDC_LOGO} height={50} />
      <img
        alt='Access to Energy Institute (A2EI)'
        src={A2EI_LOGO}
        height={50}
      />
      <img alt='ESMAP plc' src={ESMAP_LOGO} height={50} />
    </Container>
  )
}
