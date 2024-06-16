/* eslint-disable prettier/prettier */
import useSWR, { mutate } from 'swr';
//import { Student } from './types';
import supabase from '../db/supabaseClient'
import useReadDataInfo from '../hooks/supabase/ApiSupabase';

const url = 'http://localhost:5000/students';

async function updateRequest(table, id, updateData) {
  console.log('updateRequest table id updateData',id, table,updateData);
  const { status, statusText } = await supabase
      .from(table)
      .update({ ...updateData })
      .eq('id', id)
      
    console.log('status', status)
    console.log('statusText', statusText)

  // const response = await fetch(`${url}/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // return response.json();
  return status
}

async function addRequest(table,data) {

  const {statusText} = await supabase
  .from(table)
  .insert(data)

  console.log('addRequest',statusText);

  return statusText;
}

async function deleteRequest(table,id) {

  console.log('deleteRequest table id',table,id);
  const { status } = await supabase
      .from(table)
      .delete()
      .eq('id', id)
   // console.log('error', error)

  // const response = await fetch(`${url}/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // return response.json();
  return status
}

async function getRequest(table) {
  const response = await supabase.from(table).select()
  const result = {data:response.data,error:response.error}
  // const response = await supabase.from(table).select()
  console.log('getRequest result',result)
   console.log('getRequest',response.data)
   return result;
  // const response = await fetch(url);
  // return response.json();
}

export async function test()  
{
  const read = await getRequest('info_personen')
  console.log('info_personen',test);
  const person  = { 
    
    id: 4	,
    Name:'Schmidt',
    Vorname: 'Hollla',
    Anschrift:'Gartenweg 88 20095 Hamburg',
    erstellt_am:'2023-11-28'
  }

  const person2  = { 
    
    id: 27	,
    Name:'Edouardo',
    Vorname: 'Zinep',
    Anschrift:'Waldstraße 88 20095 Hamburg',
    erstellt_am:'2023-11-28'
  }

  const write_info_personen = await updateRequest('info_personen',person.id,person)
  const delete_info_personen = await deleteRequest('info_personen',5) 
  const add_info_personen = await addRequest('info_personen',person2)
  console.log('write_info_personen',write_info_personen)
  console.log('delete_info_personen',delete_info_personen)
  console.log('add_info_personen',add_info_personen)
}

async function getRequestWrapper(table) {
  const result = await getRequest(table)
  
  console.log('getRequestWrapper result',result)
  return result;
  // const response = await fetch(url);
  // return response.json();
}

export default function useTableDb(table) {
  //const { data, isValidating } = useSWR(url, getRequest);
  //const [data, setData]
  //const {data, error} = getRequestWrapper(table)
    // suscribe to db to be aware of changes and rerender components displaying this data
    // supabase
    // .channel('social_club')
    // .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: table }, (payload) => {
    //   console.log('Change received!', payload)
    //   SetUpdated(true)
    // })
    // .subscribe()

  const {data, isValidating} = useReadDataInfo(table)
  //const isValidating = error == null ? true : false
  //const isValidating = true;
  console.log('useTableDb data',data);
  console.log('useTableDb table',table);

  // sort data according to id, to have db and frontend syncronized
  data.sort( (a,b) => a.id > b.id )


  const updateRow = async (id, postData) => {
    console.log('updateRow id postData',id,postData);
    await updateRequest(table, id, postData);
    //mutate(url);
  };

  const deleteRow = async (id) => {
    await deleteRequest(table,id);
    //mutate(url);
  };

  const addRow = async (postData) => {
    console.log("addRow",postData);
    await addRequest(table,postData);
    //mutate(url);
  };

  const result = {
    data: data ?? [],
    isValidating,
    addRow,
    updateRow,
    deleteRow
  }

  console.log('result',result);
  return result;
}
