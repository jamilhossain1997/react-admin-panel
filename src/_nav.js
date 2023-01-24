import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Forms',
    to: '',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Layout1',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Layout2',
        to: '/base/breadcrumbs',
      },

    ],
  },
  {
    component: CNavGroup,
    name: 'Components',
    to: '',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '',
        to: '',
      },
      {
        component: CNavItem,
        name: '',
        to: '',
      },
      {
        component: CNavItem,
        name: '',
        to: '',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Table',
    to: '/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Profile',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '',
        to: '',
      },
      {
        component: CNavItem,
        name: '',
        to: '',
      },
      {
        component: CNavItem,
        name: '',
        to: '',
      },
    ],
  },

]

export default _nav
