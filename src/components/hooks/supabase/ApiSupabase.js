import { useEffect, useState } from 'react'
// import { createClient } from '@supabase/supabase-js'

// import { proj_url, anon_key } from '../../../lib/env'
import supabase from '../../db/supabaseClient'

//const supabase = createClient(proj_url, anon_key)

const useReadDataInfo = (data_name) => {
  const [Info, SetInfo] = useState({})
  // init to true to fetch data from db at initialization
  const [Updated, SetUpdated] = useState(true)
  console.log('useFetchDataInfo', Info)

  // suscribe to db to be aware of changes and rerender components displaying this data
  supabase
    .channel('social_club')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'info_verein' },
      (payload) => {
        console.log('Change received!', payload)
        SetUpdated(true)
      },
    )
    .subscribe()

  async function getInfo() {
    const { data } = await supabase.from(data_name).select()
    console.log('getInfo', data)
    console.log('getInfo data[0]', data[0])
    SetInfo(data[0])
    SetUpdated(false)
  }

  useEffect(() => {
    if (Updated == true) {
      getInfo()
    }
  }, [Updated])

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
