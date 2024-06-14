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

const Gesetzesvorschriften = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Gesetzesvorschriften des Cannabisgesetzes (CanG)</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">
              {info_akkordeon}
              <br></br><br></br>
              Laut Abschnitt 6 '&quot' Behördliche Überwachung von Anbauvereinigungen '&quot' § 26 sollen einige
              Informationen zur Behörde ermittelt werden, sieh,Abschnitt 6 Behördliche
              Überwachung von Anbauvereinigungen § 26 Dokumentations- und Berichtspflichten
              von Anbauvereinigungen in{' '}
              <a href="https://www.recht.bund.de/bgbl/1/2024/109/regelungstext.pdf?__blob=publicationFile&v=2">
                Bundesgesetzblatt
              </a>
            </p>
            <Docs type='gesetzesvorschriften'>
   
            </Docs>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Gesetzesvorschriften
