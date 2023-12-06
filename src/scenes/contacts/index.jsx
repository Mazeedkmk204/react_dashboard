import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Loader from "../../components/Loader";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState([]);
  const apiUrl = "https://dummyjson.com/users";

  const fetchData = async () => {
    try {
       await new Promise((resolve) => setTimeout(resolve,500));
      const response = await fetch(apiUrl);
      const data = await response.json();
      const datas= data.users || []
      const apiData = datas.map(({ id, maidenName,age, phone, email, address, company,city,postalCode }) => ({
        id,
        name: maidenName,
        age,
        phone,
        email,
        address: address.address,
        city: address.city,
       zipCode: address?.postalCode
      }));
      console.log()
      setContacts(apiData);
      setLoading(false);
      console.log(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
         sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      > {loading && <Loader />} {/* Show loader when loading is true */}
        {!loading && (
          <DataGrid
          rows={contacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          autoPageSize={true}
          // pageSize={100}
          rowsPerPageOptions={[5, 10, 20]}
        />
        )}
        
      </Box>
    </Box>
  );
};

export default Contacts;
