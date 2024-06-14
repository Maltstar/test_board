import React, { useState } from 'react'
import { check_name } from '../../../lib/utils'
import { info_verein } from '../../../components/db/supabase_layout'
import ApiHookWrapperWritedb from '../../../components/wrapper/ApiHookWrapperWritedb'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { Docs } from 'src/components'

const InfoForm = () => {
  // um die Input zu validieren, kein Input leer
  const [validated, SetValidated] = useState(false)
  // store data to be updated on db
  const [updateData, SetUpdateData] = useState({ name: '', sitz: '' })
  // signal data has been updated
  const [dataUpdated, SetDataUpdated] = useState(false)
  const table_db = 'info_verein'
  const handleSubmit = (event) => {
    const form = event.currentTarget
    console.log('handleSubmit', event.value)

    console.log('checkValidity', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      SetValidated(true)
    }
  }

  console.log('validated', validated)
  if (validated) {
    const verein_name = document.getElementById('validationVereinName')
    const verein_sitz = document.getElementById('validationVereinSitz')
    const checked_name = check_name(verein_name.value)
    const checked_sitz = check_name(verein_sitz.value)
    if (checked_name && checked_sitz) {
      SetUpdateData({ name: verein_name.value, sitz: verein_sitz.value })
      SetDataUpdated(true)
      console.log('check ok')
    }
    console.log('verein_name', verein_name.value)
    console.log('verein_sitz', verein_sitz.value)
    SetValidated(false)
  }

  console.log('dataUpdated', dataUpdated)
  console.log('updateData', updateData)
  return (
    <>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CRow>
          <CFormLabel htmlFor="validationVereinName">Name der Verein</CFormLabel>
          <CFormInput
            placeholder="Deine Vereinsname"
            type="text"
            id="validationVereinName"
            required
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CRow>
        <CRow>
          <CFormLabel htmlFor="validationVereinSitz">Sitz der Verein</CFormLabel>
          <CFormInput
            type="text"
            id="validationVereinSitz"
            placeholder="z.b: Verein XYZ Theodor-Heuss-Straße 2-4 53177 Bonn"
            required
          />
          <CFormFeedback valid>Looks good!</CFormFeedback>
        </CRow>
        <CCol xs={12} className="position-relative">
          <CButton color="primary" type="submit">
            Speichern
          </CButton>
        </CCol>
        {dataUpdated && <ApiHookWrapperWritedb tableName={table_db} {...updateData} />}
        {/* {dataUpdated && <p> okayse</p>} */}
      </CForm>
    </>
  )
}

export default InfoForm
