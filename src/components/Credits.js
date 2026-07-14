import React from 'react'
import styled from 'styled-components'

import UKAID_LOGO from '../../img/UKAID_LOGO.png'
import A2EI_LOGO from '../../img/A2EI_LOGO.png'
import BII_LOGO from '../../img/BII_LOGO.svg'
import ESMAP_LOGO from '../../img/ESMAP_LOGO.png'

/**
 * Partner logos vary wildly in aspect ratio (UK aid is ~1:1.1, BII is
 * ~4:1), so equal heights make wide wordmarks dominate. Heights below
 * are area-normalized: height ≈ √(A / aspectRatio) for a common target
 * area A, so every logo occupies roughly the same visual space.
 */
const PARTNERS = [
  { src: UKAID_LOGO, alt: 'UK aid', height: 60 }, // 184×202, ratio 0.9
  {
    src: A2EI_LOGO,
    alt: 'Access to Energy Institute (A2EI)',
    height: 42, // 861×412, ratio 2.1
  },
  {
    src: BII_LOGO,
    alt: 'British International Investment plc',
    height: 30, // 405×99, ratio 4.1
  },
  { src: ESMAP_LOGO, alt: 'ESMAP', height: 30 }, // 450×112, ratio 4.0
]

const Container = styled.div`
  padding: ${({ theme }) => `${theme.space[2]}px 0`};
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.space[3]}px ${theme.space[4]}px`};
  align-items: center;

  img {
    width: auto;
    max-width: 100%;
  }
`

export default function Credits() {
  return (
    <Container>
      {PARTNERS.map(({ src, alt, height }) => (
        <img key={alt} src={src} alt={alt} height={height} />
      ))}
    </Container>
  )
}
