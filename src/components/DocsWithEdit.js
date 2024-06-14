import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'
import InfoWrapper from '../views/verein/info/InfoWrapper'
import VermehrungsmaterialWrapper from '../views/verein/partners/vermehrungsmaterial/Vermehrungsmaterial'

const DocsWithEdit = (props) => {
  const { type, tabContentClassName } = props
  // tabActive = 0 => display Aktuell
  // tabActive = 1 => display Editieren
  const [tabActive, SetTabActive] = useState(true)
  const handleAktuellClick = () => {
    SetTabActive(true)
  }
  const handleEditierenClick = () => {
    SetTabActive(false)
  }
  return (
    <div className="example">
      <CNav variant="underline-border">
        <CNavItem>
          <CButton
            color="primary"
            variant="outline"
            onClick={handleAktuellClick}
            active={tabActive}
          >
            <CIcon icon={cilMediaPlay} className="me-2" />
            Atkuell
          </CButton>
        </CNavItem>
        <CNavItem>
          <CButton
            color="primary"
            variant="outline"
            onClick={handleEditierenClick}
            active={!tabActive}
          >
            <CIcon icon={cilCode} className="me-2" />
            Editieren
          </CButton>
        </CNavItem>
      </CNav>
      <CTabContent className={`rounded-bottom ${tabContentClassName ? tabContentClassName : ''}`}>
        <CTabPane className="p-3 preview" visible>
          {(() => {
            switch (type) {
              case 'info':
                return <InfoWrapper tabActive={tabActive} />
              case 'vermehrungsmaterial':
                return <VermehrungsmaterialWrapper tabActive={tabActive} />
              default:
                return null
            }
          })()}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

DocsWithEdit.propTypes = {
  type: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(DocsWithEdit)
