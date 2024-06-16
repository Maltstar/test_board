/* eslint-disable prettier/prettier */
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
import { DocsExample, Docs } from 'src/components'
import info_akkordeon from 'src/lib/utils'
import FeaturesAktuell from './FeaturesAktuell'

const Features = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1>CanVerWalt Features</h1>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
               CanVerWalt bietet meherere Features um die Verwaltung ihres Anbauveriens 
              oder Cannabis Social Club zu vereinfachen und effektive mit modernen und automatisierten Prozesse zu bearbeiten

            </p>
            <FeaturesAktuell/>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Features
