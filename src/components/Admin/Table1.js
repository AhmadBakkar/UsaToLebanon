import { Component } from "react";
import Axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


class Table1 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            data: [],
         }
    }

    
    /**
     * This is the first method to be called.
     */
    componentDidMount(){
        
        this.loadUsers();
    }

    /**
     * to get all the users from the db.
     */
    loadUsers = () =>{
        Axios.get("http://localhost:3001/allRecord",{
        }).then((res) => {
            console.log(res);
            this.setState({data: res?.data});
    }
 )
};
    


    render() { 
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
        this.state.data.map((item, index)=>{
                                 return(
                                     <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>{item.id}</TableCell>
                                         <TableCell>{item.ImageSrc}</TableCell>
                                         <TableCell>{item.Name}</TableCell>
                                         <TableCell>{item.Description}</TableCell>
                                         <TableCell>{item.Price}</TableCell>
                                         
                                     </TableRow>
                                 )
                                 })
                                }
          
        </TableBody>
      </Table>
    </TableContainer>
  );
}
      
}
 
export default Table1;