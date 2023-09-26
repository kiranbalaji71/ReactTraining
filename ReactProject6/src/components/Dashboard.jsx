import { Table, Layout, Typography, Button } from "antd";
import Sample from "./Sample.json";

const { Header, Content } = Layout;
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: (a, b) => a.id - b.id,
    sortDirections: ["descend"],
  },
  {
    title: "Name",
    dataIndex: "fullName",
    key: "fullName",
    sorter: (a, b) => a.fullName.length - b.fullName.length,
    sortDirections: ["descend"],
  },
  {
    title: "Job Title",
    dataIndex: "jobTitleName",
    key: "jobTitleName",
    filters: [
      {
        text: "Software Engineer",
        value: "Software Engineer",
      },
      {
        text: "QA Engineer",
        value: "QA Engineer",
      },
      {
        text: "UI/UX Designer",
        value: "UI/UX Designer",
      },
      {
        text: "Product Manager",
        value: "Product Manager",
      },
    ],
    onFilter: (value, record) => record.jobTitleName.indexOf(value) === 0,
  },
  {
    title: "Region",
    dataIndex: "region",
    key: "region",
    filters: [
      {
        text: "CA",
        value: "CA",
      },
      {
        text: "NY",
        value: "NY",
      },
      {
        text: "TX",
        value: "TX",
      },
    ],
    onFilter: (value, record) => record.region.indexOf(value) === 0,
  },
  { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
  {
    title: "Email Address",
    dataIndex: "emailAddress",
    key: "emailAddress",
    render: (text) => <a>{text}</a>,
  },
];

function Dashboard() {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography.Title level={3} style={{ color: "#ffffff" }}>
          Table Details
        </Typography.Title>
        <Button
          href="/login"
          danger
          type="primary"
          onClick={() => localStorage.removeItem("login")}
        >
          Logout
        </Button>
      </Header>
      <Content>
        <Table dataSource={Sample} columns={columns} />;
      </Content>
    </Layout>
  );
}
export default Dashboard;
