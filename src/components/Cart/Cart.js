import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';



export default function Cart(props) {

    const location = useLocation();
    const [data, setData] = useState([]);
    var total = 0;


    useEffect(() => {
        /**
         * here you can read the data passed as props.
         */
        try{
        setData(JSON.parse(localStorage.getItem("value" || 'null')));
        }catch(err){
            console.log(err);
        }

        
    })

 

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell >Image Path</TableCell>
                        <TableCell >Model</TableCell>
                        <TableCell >Description</TableCell>
                        <TableCell >Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data?.map((item, index) => {
                            return (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.ImageSrc}</TableCell>
                                    <TableCell>{item.Name}</TableCell>
                                    <TableCell>{item.Description}</TableCell>
                                    <TableCell>{item.Price + "\u0024"}</TableCell>
                                    
                                   
                                    
                                </TableRow>
                                
                            )
                        })
                    }
                    <TableRow>
            <TableCell rowSpan={5} />
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>

                </TableBody>


            </Table>
        
        </TableContainer>
       
        
    );

}