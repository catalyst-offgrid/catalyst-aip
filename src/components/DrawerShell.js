import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { ChevronDown } from '../icons'

// Width of the NavigationBar (theme.space[5]); the drawer sits to its right.
const NAV_W = 70
// Drawer width; capped so the map always keeps some room on small screens.
const DRAWER_W = 'min(340px, 78vw)'
const MOBILE_BP = 1024

/**
 * Occupies the 'sidebar' grid track. Its width animates so the map
 * (grid 'content') reflows on desktop. On small screens it is always
 * zero-width: the panel overlays the map instead of squeezing it.
 */
const Track = styled.div`
  grid-area: sidebar;
  position: relative;
  height: 100%;
  width: ${({ open }) => (open ? DRAWER_W : '0px')};
  transition: width ${({ theme }) => theme.transitions.base};

  @media (max-width: ${MOBILE_BP}px) {
    width: 0;
  }
`

const Panel = styled.section`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${DRAWER_W};
  z-index: 5;

  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.md};

  display: flex;
  flex-direction: column;

  transform: translateX(${({ open }) => (open ? '0' : '-102%')});
  transition: transform ${({ theme }) => theme.transitions.base};

  @media (max-width: ${MOBILE_BP}px) {
    position: fixed;
    left: ${NAV_W}px;
    top: 0;
    bottom: 0;
  }
`

const Backdrop = styled.div`
  display: none;

  @media (max-width: ${MOBILE_BP}px) {
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${NAV_W}px;
    background: rgba(23, 31, 60, 0.4);
    z-index: 4;
  }
`

const ToggleButton = styled.button`
  position: fixed;
  top: 16px;
  left: calc(${NAV_W}px + ${({ open }) => (open ? DRAWER_W : '0px')});
  z-index: 6;

  width: 28px;
  height: 48px;
  padding: 0;
  border: none;
  border-radius: 0 ${({ theme }) => theme.radii[2]}px
    ${({ theme }) => theme.radii[2]}px 0;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.md};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: left ${({ theme }) => theme.transitions.base},
    background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.muted};
  }

  /* rotate the chevron to point left (open) or right (closed) */
  svg {
    transform: rotate(${({ open }) => (open ? '90deg' : '-90deg')});
    transition: transform ${({ theme }) => theme.transitions.base};
  }
`

const ScrollContainer = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border-top: ${({ theme }) => `1px solid ${theme.colors.accent}`};
`

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => `${theme.space[2]}px`};
  padding: ${({ theme }) => `${theme.space[2]}px`};
  border-top: ${({ theme }) => `1px solid ${theme.colors.accent}`};
`

/**
 * Collapsible sidebar shell shared by the map and MTF drawers.
 * Starts open on desktop, closed below the mobile breakpoint so the
 * map is the first thing a small-screen visitor sees.
 */
export default function DrawerShell({ label, header, actions, children }) {
  const [open, setOpen] = useState(
    () =>
      typeof window === 'undefined' ||
      window.matchMedia(`(min-width: ${MOBILE_BP + 1}px)`).matches
  )

  const toggle = () => {
    setOpen((o) => !o)
    // mapbox-gl (trackResize) listens for window resize; nudge it after
    // the width/transform transition so the canvas fills the new space.
    setTimeout(() => window.dispatchEvent(new Event('resize')), 320)
  }

  return (
    <Track open={open}>
      <Backdrop open={open} onClick={toggle} aria-hidden='true' />
      <Panel open={open} aria-label={label}>
        {header}
        <ScrollContainer>{children}</ScrollContainer>
        <Actions>{actions}</Actions>
      </Panel>
      <ToggleButton
        open={open}
        onClick={toggle}
        aria-expanded={open}
        aria-label={open ? `Hide ${label}` : `Show ${label}`}
        data-cy='drawer-toggle'
      >
        <ChevronDown color='#304CA2' />
      </ToggleButton>
    </Track>
  )
}

DrawerShell.propTypes = {
  label: PropTypes.string.isRequired,
  header: PropTypes.node,
  actions: PropTypes.node,
  children: PropTypes.node,
}
