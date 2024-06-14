import PropTypes from 'prop-types'
import React from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'
import InfoAktuell from './InfoAktuell'
import InfoForm from './InfoForm'

const InfoWrapper = (props) => {
  const { tabActive } = props
  // zeig Aktuell Infos oder das Form zu editieren an
  // abhänhig tabActive
  return <>{tabActive ? <InfoAktuell /> : <InfoForm />}</>
}

InfoWrapper.propTypes = {
  tabActive: PropTypes.bool,
}

export default React.memo(InfoWrapper)
