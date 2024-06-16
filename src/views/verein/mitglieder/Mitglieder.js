import React from 'react'
import { TableMitglieder } from '../../../components/table/TableMitglieder'

const Mitglieder = () => {
  //const { data, isValidating, addRow, updateRow, deleteRow } = useStudents()
  //console.log('data', data)
  return (
    <>
      <h1>Mitglieder</h1>
      {/* <VermehrungsmaterialAktuell /> */}
      <TableMitglieder />
      {/* <Table /> */}
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

export default Mitglieder
