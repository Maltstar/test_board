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
import useReadDataInfo from '../../../components/hooks/supabase/ApiSupabase'
import { useWriteDataInfo, useCreateAnonUser } from '../../../components/hooks/supabase/ApiSupabase'

const InfoAktuell = () => {
  //useWriteDataInfo()
  // const anon_user = useCreateAnonUser()
  const data = useReadDataInfo('info_verein')
  let verein = JSON.parse(JSON.stringify(data.data))
  let infoVerein = { name: '', sitz: '' }
  //const verein = [...data.data]
  verein.map((info) => {
    infoVerein.name = info.name
    infoVerein.sitz = info.sitz
  })

  console.log('InfoAktuell verein', verein)
  console.log('InfoAktuell infoVerein', infoVerein)
  //console.log('InfoAktuell data name', verein[0].name)

  return (
    <CAccordion alwaysOpen>
      <CAccordionItem itemKey={1}>
        <CAccordionHeader>Name der Verein</CAccordionHeader>
        <CAccordionBody>
          <strong>{infoVerein.name}</strong>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={2}>
        <CAccordionHeader>Sitz der Verein</CAccordionHeader>
        <CAccordionBody>
          <p> {infoVerein.sitz}</p>
        </CAccordionBody>
      </CAccordionItem>
      <CAccordionItem itemKey={5}>
        <CAccordionHeader>Vermehrungsmaterial juristischen Personen</CAccordionHeader>
        <CAccordionBody>
          <CListGroup>
            <CListGroupItem>juristischen Person 1</CListGroupItem>
            <CListGroupItem>Max Mustermann</CListGroupItem>
          </CListGroup>
        </CAccordionBody>
      </CAccordionItem>
    </CAccordion>
  )
}

export default InfoAktuell
