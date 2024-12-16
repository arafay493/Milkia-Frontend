"use client"
import DealersListTable from "@/components/dealersComponents/dealers-list/DealersListTable";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const RegisteredClients = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h3" fontSize={20} mb={2} fontWeight={600}>
          Dealers List
        </Typography>
        <DealersListTable />
      </CardContent>
    </Card>
  );
};

export default RegisteredClients;
