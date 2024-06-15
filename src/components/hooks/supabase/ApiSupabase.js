import { useEffect, useState } from 'react'
// import { createClient } from '@supabase/supabase-js'

// import { proj_url, anon_key } from '../../../lib/env'
import supabase from '../../db/supabaseClient'

//const supabase = createClient(proj_url, anon_key)

const useReadDataInfo = (table) => {
  const [Info, SetInfo] = useState({ data: [], isValidating: true })
  // init to true to fetch data from db at initialization
  const [Updated, SetUpdated] = useState(true)
  // const [isValidating, SetIsValidating] = useState(false)
  console.log('useFetchDataInfo', Info)
  // const table_db = 'info_verein'

  // suscribe to db to be aware of changes and rerender components displaying this data
  supabase
    .channel('social_club')
    .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: table }, (payload) => {
      console.log('Change received!', payload)
      SetUpdated(true)
    })
    .subscribe()

  async function getInfo() {
    const { data } = await supabase.from(table).select()
    console.log('getInfo', data)
    console.log('getInfo data[0]', data[0])
    SetInfo({
      data: data,
      isValidating: false,
    })
    SetUpdated(false)
  }

  useEffect(() => {
    if (Updated == true) {
      getInfo()
    }
  }, [Updated])

  // useEffect(() => {
  //   if (Info.id != undefined) {
  //     // SetIsValidating(true)
  //   }
  // }, [Info])

  console.log('Info', Info)
  return Info
}

export const useWriteDataInfo = (tableName, updateData) => {
  //const supabase = createClient(proj_url, anon_key)
  const [Error, SetError] = useState('')
  console.log('tableName', tableName)
  console.log('updateData', updateData)

  async function WriteInfoDb() {
    const { data, error } = await supabase
      .from(tableName)
      .update({ ...updateData })
      .eq('id', 1)
      .select()
    SetError(error)
    console.log('data', data)
  }

  WriteInfoDb()
  console.log('useWriteDataInfo error', Error)
  return Error
}

export const useCreateAnonUser = () => {
  const [AnonUser, SetAnonUser] = useState()
  async function createAnonUser() {
    const { data, error } = await supabase.auth.signInAnonymously({
      options: {
        //captchaToken
      },
    })

    console.log('anonuser', data)
    SetAnonUser(data)
  }

  useEffect(() => {
    createAnonUser()
  }, [])

  return AnonUser
}

export default useReadDataInfo
