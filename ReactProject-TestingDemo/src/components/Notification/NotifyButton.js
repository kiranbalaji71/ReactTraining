import { Badge, Button, Popover, message } from "antd";
import React from "react";
import { clearAllNotifications } from "../../features/notification/notifySlice";
import { useDispatch, useSelector } from "react-redux";
import { BellOutlined } from "@ant-design/icons";
import DisplayNotification from "./DisplayNotification";
import "./Notification.css";

const NotifyButton = () => {
  const notifications = useSelector(
    (state) => state.Notifications.notifications
  );
  const dispatch = useDispatch();

  const clearAllNotification = () => {
    dispatch(clearAllNotifications());
    message.success("All notifications had been cleared.");
  };

  const unreadNotification = notifications.filter((item) => !item.isMarkAsRead);
  return (
    <div>
      <Popover
        placement="bottomRight"
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 12px 0",
            }}
          >
            All Notifications
            <div>
              <Button
                danger
                type="text"
                onClick={() => clearAllNotification()}
                disabled={unreadNotification.length ? false : true}
              >
                Clear All
              </Button>
            </div>
          </div>
        }
        arrow={false}
        content={
          <div
            style={{
              width: "35vw",
              height: "auto",
              padding: "0 12px 12px",
            }}
          >
            <DisplayNotification route={"popover"} />
          </div>
        }
        trigger="click"
      >
        <Badge
          count={unreadNotification.length}
          overflowCount={9}
          offset={[-5, 5]}
        >
          <Button
            className="floatButton"
            type="primary"
            icon={<BellOutlined />}
            size="large"
            shape="circle"
          />
        </Badge>
      </Popover>
    </div>
  );
};

export default NotifyButton;
