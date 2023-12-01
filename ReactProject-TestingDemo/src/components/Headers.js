import React from "react";
import { Route, Routes } from "react-router-dom";
import NotificationButton from "./Notification/NotificationButton";
import { Typography } from "antd";

const Headers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NotificationButton />} />
        <Route
          path="/notify"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>All Notification</Typography.Title>
            </div>
          }
        />
        <Route
          path="/speech"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Speech Recognition</Typography.Title>
            </div>
          }
        />
        <Route
          path="/membership"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Membership</Typography.Title>
            </div>
          }
        />
        <Route
          path="/health"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Health Info</Typography.Title>
            </div>
          }
        />
        <Route
          path="/assessment"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Self Assessments</Typography.Title>
            </div>
          }
        />
        <Route
          path="/appointment"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Appointment</Typography.Title>
            </div>
          }
        />
        <Route
          path="/patient"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Patient</Typography.Title>
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Setting</Typography.Title>
            </div>
          }
        />

        <Route
          path="/account"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Switch Account</Typography.Title>
            </div>
          }
        />
        <Route
          path="/funnel"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Funnel</Typography.Title>
            </div>
          }
        />
        <Route
          path="/funnel/adolescent"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Funnel</Typography.Title>
            </div>
          }
        />
        <Route
          path="/funnel/adult"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Funnel</Typography.Title>
            </div>
          }
        />
        <Route
          path="/funnel/senior-adult"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Funnel</Typography.Title>
            </div>
          }
        />
        <Route
          path="/funnel/assessment"
          element={
            <div
              style={{
                margin: "0 10px",
              }}
            >
              <Typography.Title level={2}>Funnel</Typography.Title>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Headers;
