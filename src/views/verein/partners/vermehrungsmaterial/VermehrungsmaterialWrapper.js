import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'
import VermehrungsmaterialAktuell from './VermehrungsmaterialAktuell'

const VermehrungsmaterialWrapper = (props) => {
  const { tabActive } = props
  // zeig Aktuell Infos oder das Form zu editieren an
  // abhänhig tabActive
  return <>{tabActive ? <VermehrungsmaterialAktuell /> : <p> edit</p>}</>
  // return <>{tabActive ? <p> hi</p> : <p> edit</p>}</>
}

VermehrungsmaterialWrapper.propTypes = {
  tabActive: PropTypes.bool,
}

export default React.memo(VermehrungsmaterialWrapper)
