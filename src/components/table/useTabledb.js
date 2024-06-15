/* eslint-disable prettier/prettier */
import useSWR, { mutate } from 'swr';
//import { Student } from './types';
import supabase from '../db/supabaseClient'
import useReadDataInfo from '../hooks/supabase/ApiSupabase';

const url = 'http://localhost:5000/students';

async function updateRequest(table, id, updateData) {
  const { data, error } = await supabase
      .from(table)
      .update({ ...updateData })
      .eq('id', id)
      .select()
    console.log('data', data)
    console.log('error', error)

  // const response = await fetch(`${url}/${id}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // return response.json();
  return error
}

async function addRequest(table,data) {

  const {statusText} = await supabase
  .from(table)
  .insert(data)

  return statusText;
}

async function deleteRequest(table,id) {

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
    
    id: 2	,
    Name:'Schmidt',
    Vorname: 'Lea',
    Anschrift:'Gartenweg 88 20095 Hamburg',
    erstellt_am:'2023-11-28'
  }

  const person2  = { 
    
    id: 23	,
    Name:'Hanzel',
    Vorname: 'Gretel',
    Anschrift:'gg 88 20095 Hamburg',
    erstellt_am:'2023-11-28'
  }

  const write_info_personen = await updateRequest('info_personen',2,person)
  const delete_info_personen = await deleteRequest('info_personen',3) 
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
  const {data, isValidating} = useReadDataInfo('info_personen')
  //const isValidating = error == null ? true : false
  //const isValidating = true;
  console.log('useTableDb data',data);


  const updateRow = async (id, postData) => {
    await updateRequest(id, postData);
    //mutate(url);
  };

  const deleteRow = async (id) => {
    await deleteRequest(id);
    //mutate(url);
  };

  const addRow = async (postData) => {
    await addRequest(postData);
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
