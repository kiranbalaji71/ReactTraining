import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import "./table.css";

function formTable({ formDataObject }) {
  return (
    <div className="table">
      <h1>Form Data Table</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>State</TableCell>
            <TableCell>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formDataObject.map((formData, index) => (
            <TableRow key={index}>
              <TableCell>{formData.name}</TableCell>
              <TableCell>{formData.email}</TableCell>
              <TableCell>{formData.dob}</TableCell>
              <TableCell>{formData.phoneNumber}</TableCell>
              <TableCell>{formData.gender}</TableCell>
              <TableCell>{formData.address}</TableCell>
              <TableCell>{formData.state}</TableCell>
              <TableCell>{formData.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default formTable;
