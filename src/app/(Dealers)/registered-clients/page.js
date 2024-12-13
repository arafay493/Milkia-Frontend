"use client"
import RegisteredClientsListTable from "@/components/dealersComponents/registered-clients/RegisteredClientsListTable";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const RegisteredClients = () => {
  return (
    <Card>
      <CardContent style={{ overflowX: "auto" }}>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Registered Clients
        </Typography>
        <RegisteredClientsListTable />
      </CardContent>
    </Card>
  );
};

export default RegisteredClients;
