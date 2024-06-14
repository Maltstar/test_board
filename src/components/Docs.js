import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'
import { CNav, CNavItem, CNavLink, CTabContent, CTabPane, CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCode, cilMediaPlay } from '@coreui/icons'

import GesetzesvorschriftenAktuell from '../views/verein/gesetzesvorschriften/GesetzesvorschriftenAktuell'

const Docs = (props) => {
  const { type, tabContentClassName } = props

  return (
    <div className="example">
      {/* <CNav variant="underline-border">
        <CNavItem>
          <CButton color="primary" variant="outline" active={true}>
            <CIcon icon={cilMediaPlay} className="me-2" />
            Atkuell
          </CButton>
        </CNavItem>
      </CNav> */}
      <CTabContent className={`rounded-bottom ${tabContentClassName ? tabContentClassName : ''}`}>
        <CTabPane className="p-3 preview" visible>
          {(() => {
            switch (type) {
              case 'gesetzesvorschriften':
                return <GesetzesvorschriftenAktuell />
              default:
                return null
            }
          })()}
        </CTabPane>
      </CTabContent>
    </div>
  )
}

Docs.propTypes = {
  type: PropTypes.string,
  tabContentClassName: PropTypes.string,
}

export default React.memo(Docs)
