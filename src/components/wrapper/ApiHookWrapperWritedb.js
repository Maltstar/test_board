
import React from 'react'
import PropTypes from 'prop-types'

import { useWriteDataInfo } from '../hooks/supabase/ApiSupabase'
import { CAlert } from '@coreui/react'
import { useCreateAnonUser } from '../hooks/supabase/ApiSupabase'

//    export default function ApiHookWrapper({apiName,refreshQuote,SetRefreshQuote,SetDisplayQuote}:ApiHookWrapperProps)
const ApiHookWrapperWritedb = (props) => {
  const { tableName, ...updateData } = props
  //const anon_user = useCreateAnonUser()

  console.log('ApiHookWrapperWritedb updateData', updateData)
  //const error = null
  // const [Quote,SetQuote] = useState<Quote_with_Author|undefined>(undefined)
  //const fetchedQuoteData = useSmartContractFunction(apiName)
  const error = useWriteDataInfo(tableName, updateData)

  return (
    <>
      {error == null ? (
        <CAlert color="success">Informationen wurden aktualisiert</CAlert>
      ) : (
        <CAlert color="danger">Informationen wurden nicht aktualisiert</CAlert>
      )}
    </>

    // (apiName == 'getQuote' &&
    // <GetCurrentQuoteWrapper {...rest } fetchedQuoteData={fetchedQuoteData as ResultGetQuoteType}/>)
  )
}

ApiHookWrapperWritedb.propTypes = {
  tableName: PropTypes.string,
  updateData: PropTypes.object,
}

export default React.memo(ApiHookWrapperWritedb)
