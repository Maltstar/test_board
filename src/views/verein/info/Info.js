import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
  CListGroup,
  CListGroupItem,
} from '@coreui/react'
import { DocsWithEdit } from 'src/components'
import InfoWrapper from './InfoWrapper'
import info_akkordeon from 'src/lib/utils'
import InfoAktuell from './InfoAktuell'
const Info = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Verein Info</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">{info_akkordeon}</p>
            <DocsWithEdit type="info" />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Info
