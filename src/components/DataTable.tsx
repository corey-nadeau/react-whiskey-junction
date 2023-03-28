import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';



const columns: GridColDef[] = [
  { field: 'maker', headerName: 'Maker / Brand', flex: 1, headerAlign: 'center', width: 100},
  { field: 'flavor', headerName: 'Flavor / Profile', flex: 1, headerAlign: 'center', width: 100},
  { field: 'year', headerName: 'Year made', flex: 1, headerAlign: 'center', width: 100},
  { field: 'rating', headerName: 'Rating 1-10', flex: 1, headerAlign: 'center', width: 100}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  const handleOpen = () => {
    setOpen(true)
    }
  const handleClose = () => {
    setOpen(false)
    }
  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
    }

  return (
    <>
        <Modal 
            id={selectionModel}
            open={open}
            onClose={handleClose}
        />
        <div className='flex flex-row pl-8'>
            <Button onClick={handleOpen} className='p-3 bg-black text-white m-3 rounded hover:bg-slate-800 hover:text-white' >Enter New Whiskey</Button>
            <Button onClick={handleOpen} className="p-3 bg-black text-white m-3 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 bg-black text-white m-3 rounded hover:bg-slate-800 hover:text-white" >Finished Bottle / Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height: 700, width: '100%' }}
          >
            <h2 className="p-3 bg-black text-white my-2 rounded">My Whiskeys</h2>
            <DataGrid rows={contactData} columns={columns}
            checkboxSelection={true} 
            onRowSelectionModelChange={ (item:any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable