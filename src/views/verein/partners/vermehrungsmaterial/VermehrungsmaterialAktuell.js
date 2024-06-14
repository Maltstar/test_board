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
  CTable,
} from '@coreui/react'
import info_akkordeon from 'src/lib/utils'
//import useReadDataInfo from '../../../../components/hooks/supabase/ApiSupabase'
//import { useWriteDataInfo, useCreateAnonUser } from '../../../../components/hooks/supabase/ApiSupabase'

const VermehrungsmaterialTable = () => {
  const columns = [
    {
      key: 'id',
      label: '#',
      _props: { scope: 'col' },
    },
    {
      key: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'Vorname',
      //label: 'Heading',
      _props: { scope: 'col' },
    },
    {
      key: 'Anschrift',
      //label: 'Heading',
      _props: { scope: 'col' },
    },
  ]

  const items = [
    {
      id: 1,
      Vorname: 'Mark',
      Name: 'Otto',
      Anschrift: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      Vorname: 'Jacob',
      Name: 'Thornton',
      Anschrift: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      Vorname: 'Larry',
      Name: 'Bird',
      Anschrift: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]
  return <CTable columns={columns} items={items} responsive tableHeadProps={{ color: 'dark' }} />
}

const VermehrungsmaterialAktuell = () => {
  return <VermehrungsmaterialTable />
}

export default VermehrungsmaterialAktuell
