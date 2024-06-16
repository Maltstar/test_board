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

import CIcon from '@coreui/icons-react'

import { cilSpeedometer, cilSpreadsheet, cilAddressBook, cilPrint } from '@coreui/icons'

const FeaturesAktuell = () => {
  return (
    <CAccordion alwaysOpen>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>
          Dashboard/Visualisierung <CIcon icon={cilSpeedometer} size="xl" />
        </CAccordionHeader>
        <CAccordionBody>
          <CListGroup>
            <CListGroupItem>Einhame</CListGroupItem>
            <CListGroupItem>Total Verkauf</CListGroupItem>
            <CListGroupItem>Anzahl Mitglieder</CListGroupItem>
            <CListGroupItem>wichtige Metrics</CListGroupItem>
            <CListGroupItem>neue Metrics auf Wünsche</CListGroupItem>
          </CListGroup>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>
          Editierbar Tabelle <CIcon icon={cilSpreadsheet} size="xl" />{' '}
        </CAccordionHeader>
        <CAccordionBody>
          <p>
            {' '}
            Editierbare Tabelle um effektive die mehrere und verschiedene Transaktion zu bearbeiten
            und speichern
          </p>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={3}>
        <CAccordionHeader>
          Gesetztvorschift <CIcon icon={cilAddressBook} size="xl" />
        </CAccordionHeader>
        <CAccordionBody>
          <CListGroup>
            <CListGroupItem>
              gelisteter Gesetztvorschift um ständig gesetzeskonform zu sein{' '}
            </CListGroupItem>
            <CListGroupItem> Implementierung der Gesetztvorschift im App </CListGroupItem>
          </CListGroup>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={5}>
        <CAccordionHeader>
          Berichtserstellung <CIcon icon={cilPrint} size="xl" />{' '}
        </CAccordionHeader>
        <CAccordionBody>
          <CListGroup>
            <CListGroupItem>
              {' '}
              Berichtserstellung auf Wünsche und per Gesetztvorschift{' '}
            </CListGroupItem>
            <CListGroupItem>
              {' '}
              Jede Tabelle kann im Berichtserstellung integriert werden.{' '}
            </CListGroupItem>
            <CListGroupItem> Kein Bericht per Hand mehr </CListGroupItem>
          </CListGroup>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}

export default FeaturesAktuell
