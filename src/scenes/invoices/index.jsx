import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import Loader from "../../components/Loader"; 
import { tokens } from "../../theme";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://dummyjson.com/users";

  const fetchData = async () => {
    try {
      
      await new Promise((resolve) => setTimeout(resolve,500));

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      const datas= data.users || []
      const invoicesData = datas.map(({ id, maidenName, phone, email, height,birthDate }) => ({
        id,
        name :maidenName,
        phone,
        email,
        height: Math.random() * 100,
         birthDate, 
        
      }));

      setInvoices(invoicesData);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "height",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors?.greenAccent?.[500]}>
          {params.row.height}
        </Typography>
      ),
    },
    {
      field: "birthDate",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          position: "relative",
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors?.greenAccent?.[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors?.blueAccent?.[700] ,
            borderBottom: "none",
          },
          
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors?.primary?.[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors?.blueAccent?.[700],
          },
          "& .MuiCheckbox-root": {
            color: colors?.greenAccent?.[200],
          },
          
        }}
      >
        {loading && <Loader />} 
        {!loading && (
          <DataGrid
            checkboxSelection
            rows={invoices}
            columns={columns}
            autoPageSize={true}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 20]}
          />
        )}
      </Box>
    </Box>
  );
};

export default Invoices;








