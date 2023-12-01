import React from "react";
import {
  Button,
  List,
  Space,
  Typography,
  Tooltip,
  theme,
  message,
  Avatar,
} from "antd";
import {
  CloseOutlined,
  CheckOutlined,
  InfoOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeNotification,
  clearAllNotifications,
  markNotificationAsRead,
  markAllNotifcationAsRead,
} from "../../features/notification/notifySlice";
import Path from "../../assets/Path.json";
import Icon from "@ant-design/icons/lib/components/Icon";

const DoubleTickSvg = () => (
  <svg
    width="1em"
    height="1em"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 122.88 74.46"
  >
    <path d="M1.87,47.2a6.33,6.33,0,1,1,8.92-9c8.88,8.85,17.53,17.66,26.53,26.45l-3.76,4.45-.35.37a6.33,6.33,0,0,1-8.95,0L1.87,47.2ZM30,43.55a6.33,6.33,0,1,1,8.82-9.07l25,24.38L111.64,2.29c5.37-6.35,15,1.84,9.66,8.18L69.07,72.22l-.3.33a6.33,6.33,0,0,1-8.95.12L30,43.55Zm28.76-4.21-.31.33-9.07-8.85L71.67,4.42c5.37-6.35,15,1.83,9.67,8.18L58.74,39.34Z" />
  </svg>
);

const DoubleTickIcon = (props) => <Icon component={DoubleTickSvg} {...props} />;

const DisplayNotification = ({ route }) => {
  const nav = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const notifications = useSelector(
    (state) => state.Notifications.notifications
  );
  const dispatch = useDispatch();

  const sendMessage = async (id, markAsRead) => {
    const config = {
      notificationId: id,
      isMarkAsRead: markAsRead,
    };
    try {
      const response = await axios.post("http://127.0.0.1:8000/api", config);
      if (response.status === 200) {
        console.log(response.data.message);
        console.log(
          response.data.mark_as_read ? "mark as read" : "mark as unread"
        );
      } else {
        message.error("Reponse is not received properly");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickNotification = (id, path) => {
    let link;
    Path.forEach((item) => {
      if (path === item.msgPath) {
        link = item.redirectPath;
      }
    });

    window.location.href = link;
    dispatch(markNotificationAsRead({ id, markAsRead: true }));
    sendMessage(id, true);
  };

  const handleReadNotification = (id, markAsRead) => {
    dispatch(markNotificationAsRead({ id, markAsRead }));
    sendMessage(id, markAsRead);
  };

  const readAllNofitications = () => {
    dispatch(markAllNotifcationAsRead());
  };

  const handleRemoveNotification = (id) => {
    dispatch(removeNotification(id));
  };

  const clearAllNotification = () => {
    dispatch(clearAllNotifications());
  };

  const currentDate = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const notifyTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const notifyDate = (date) => {
    return date.toLocaleDateString([], {
      day: "2-digit",
      month: "short",
    });
  };

  const reverseNotifications = [...notifications].reverse();

  const unreadNotifications = reverseNotifications.filter(
    (item) => !item.isMarkAsRead
  );

  const loadMore = (
    <div>
      <Button
        className="moreNotificationsButton"
        block
        onClick={() => {
          nav("/notify");
        }}
      >
        More Notifications
      </Button>
    </div>
  );

  const footer = (
    <div className="notificationFooter">
      <Space>
        <Button
          type="text"
          onClick={() => readAllNofitications()}
          disabled={
            unreadNotifications.length && notifications.length ? false : true
          }
        >
          Mark All Read
        </Button>
        <Button
          type="text"
          danger
          onClick={() => clearAllNotification()}
          disabled={notifications.length ? false : true}
        >
          Clear All
        </Button>
      </Space>
    </div>
  );
  return (
    <div
      style={{
        background: colorBgContainer,
      }}
    >
      <div className={route === "notify" ? "notificationList" : null}>
        <List
          dataSource={
            route === "popover"
              ? unreadNotifications.slice(0, 3)
              : reverseNotifications
          }
          loadMore={route === "popover" ? loadMore : footer}
          renderItem={(item) => (
            <List.Item
              actions={[
                <CloseOutlined
                  onClick={() => handleRemoveNotification(item.notificationId)}
                />,
              ]}
            >
              <Space>
                <div>
                  {item.status === "open" && <Avatar>{item.message[0]}</Avatar>}
                  {item.status === "success" && (
                    <Avatar
                      icon={<CheckOutlined />}
                      style={{ backgroundColor: "#87d068" }}
                    />
                  )}
                  {item.status === "error" && (
                    <Avatar
                      icon={<CloseOutlined />}
                      style={{ backgroundColor: "#ff4d4f" }}
                    />
                  )}
                  {item.status === "info" && (
                    <Avatar
                      icon={<InfoOutlined />}
                      style={{ backgroundColor: "#1677ff" }}
                    />
                  )}
                  {item.status === "warning" && (
                    <Avatar
                      icon={<WarningOutlined />}
                      style={{ backgroundColor: "#eaec52" }}
                    />
                  )}
                </div>
                <div style={{ width: "100%" }}>
                  <Link
                    style={{ color: "#000" }}
                    onClick={() =>
                      handleClickNotification(item.notificationId, item.path)
                    }
                  >
                    <Typography.Title
                      level={5}
                      type={item.isMarkAsRead ? "secondary" : "primary"}
                    >
                      {item.message}
                    </Typography.Title>
                    <Typography.Paragraph
                      type={item.isMarkAsRead ? "secondary" : "primary"}
                    >
                      {item.description}
                    </Typography.Paragraph>
                  </Link>
                  <Space>
                    <Typography.Paragraph type="secondary">
                      {currentDate(new Date(item.dateTime))
                        ? notifyTime(new Date(item.dateTime))
                        : notifyDate(new Date(item.dateTime))}
                    </Typography.Paragraph>
                    <Tooltip
                      placement="right"
                      title={
                        item.isMarkAsRead ? "mark as read" : "mark as unread"
                      }
                    >
                      {item.isMarkAsRead ? (
                        <DoubleTickIcon
                          onClick={() =>
                            handleReadNotification(item.notificationId, false)
                          }
                          style={{ color: "#118e44" }}
                        />
                      ) : (
                        <CheckOutlined
                          onClick={() =>
                            handleReadNotification(item.notificationId, true)
                          }
                        />
                      )}
                    </Tooltip>
                  </Space>
                </div>
              </Space>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default DisplayNotification;
