import React from 'react'
import styled from 'styled-components'

import UKAID_LOGO from '../../img/UKAID_LOGO.png'
import A2EI_LOGO from '../../img/A2EI_LOGO.png'
import BII_LOGO from '../../img/BII_LOGO.svg'
import ESMAP_LOGO from '../../img/ESMAP_LOGO.png'

const Container = styled.div`
  padding: ${({ theme }) => `${theme.space[2]}px 0`};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};
  align-items: center;
  width: min(800px, 100%);

  img {
    max-width: 100%;
    height: auto;
  }
`

export default function Credits() {
  return (
    <Container>
      <img alt='UK aid' src={UKAID_LOGO} height={56} />
      <img
        alt='Access to Energy Institute (A2EI)'
        src={A2EI_LOGO}
        height={48}
      />
      <img
        alt='British International Investment plc'
        src={BII_LOGO}
        height={38}
      />
      <img alt='ESMAP' src={ESMAP_LOGO} height={42} />
    </Container>
  )
}
