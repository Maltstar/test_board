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
  CCardTitle,
} from '@coreui/react'
import { Docs } from 'src/components'
import info_akkordeon from 'src/lib/utils'
import VermehrungsmaterialAktuell from './VermehrungsmaterialAktuell'
import { Table } from '../../../../components/table/index'
//import useStudents from '../../../../components/table/useStudents'

const Vermehrungsmaterial = () => {
  //const { data, isValidating, addRow, updateRow, deleteRow } = useStudents()
  //console.log('data', data)
  return (
    <>
      <h1>Vereinsvermehrungsmaterial (juristischen Personen)</h1>
      <VermehrungsmaterialAktuell />
      <Table />
    </>

    // <CRow>
    //   <CCol xs={12}>
    //     <CCard className="mb-4">
    //       <CCardHeader>
    //         <strong>Vereinsvermehrungsmaterial</strong>
    //       </CCardHeader>
    //       <CCardBody>
    //         <p className="text-body-secondary small">{info_akkordeon}</p>
    //         <Docs type="vermehrungsmaterial" />
    //       </CCardBody>
    //     </CCard>
    //   </CCol>
    // </CRow>
  )
}

export default Vermehrungsmaterial
