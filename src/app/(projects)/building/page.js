import BuildingCard from '@/components/projectsComponents/building/Card'
import { Stack, Typography } from '@mui/material'
import React from 'react'

const Building = () => {
  return (
    <Stack height={"80vh"} direction={"column"} alignContent={"center"} justifyContent={"center"} gap={5}>
      <Typography variant="h3" textAlign={"center"}>Buildings</Typography>
      <BuildingCard />
    </Stack>
  )
}

export default Building