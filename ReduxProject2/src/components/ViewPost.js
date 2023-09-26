import React from "react";
import { Card, Typography, Button, Empty, Tooltip } from "antd";
import { DeleteOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost, editPost } from "../features/post/postSlice";

const ViewPost = () => {
  const post = useSelector((state) => state.poster.post);
  const dispatch = useDispatch();
  return (
    <div style={{ width: 400, margin: "auto" }}>
      <Typography.Title level={2}>New Post</Typography.Title>
      {post.length === 0 ? (
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          description="No Post"
        />
      ) : (
        post.map((item) => (
          <Card
            key={item.id}
            style={{ margin: "10px 0" }}
            title={item.input[0]}
            extra={
              <Tooltip placement="left" title="Delete the post">
                <Button
                  danger
                  type="text"
                  onClick={() => dispatch(deletePost(item.id))}
                >
                  <DeleteOutlined />
                </Button>
              </Tooltip>
            }
            actions={[
              <Button type="text" onClick={() => dispatch(likePost(item.id))}>
                <HeartFilled style={{ color: "#fd778e" }} /> {item.like}
              </Button>,
            ]}
          >
            <Typography.Paragraph
              editable={{
                onChange: (value) =>
                  dispatch(editPost({ id: item.id, input: value })),
              }}
              ellipsis={{ rows: 1, expandable: true, symbol: "more" }}
            >
              {item.input[1]}
            </Typography.Paragraph>
            <Typography.Paragraph type="secondary">
              {item.input[2]}
            </Typography.Paragraph>
          </Card>
        ))
      )}
    </div>
  );
};

export default ViewPost;
