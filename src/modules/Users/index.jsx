/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { Button, Table } from "antd";
import { useState } from "react";
import withLayout from "../../core/components/AppLayout/withLayout";
import AppLoader from "../../core/components/AppLoader";
import TitleHeader from "../../core/components/TitleHeader";
import { useUsersQuery } from "../../core/services/redux/api/userApi";
const columns = [
  {
    title: "Employee Id",
    dataIndex: "empId",
    key: "empId",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Approval",
    dataIndex: "approval",
    key: "approval",
  },
];
const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const {data,isLoading} = useUsersQuery({
    page: currentPage,
    limit: pageSize,
  })
  const dataSource = data?.data?.map((user)=>
      ({
        key: user._id,
        empId:user.userId,
        name: user.name,
        email: user.email,
        role:user.role,
        approval: <Button>Approve</Button>,
      }),
  ) 
  const onChangeHandler = (page) => {
    setCurrentPage(page);
  };
  console.log(data);
  if (isLoading) return <AppLoader />;
  return (
    <div style={{padding:'0 10px'}}>
      <TitleHeader title="Employees" className="mb-[34px]" />
      <Table dataSource={dataSource} columns={columns} 
      pagination={{
        pageSize: data?.meta?.limit,
        total: data?.meta?.total,
        defaultCurrent: currentPage,
        onChange: onChangeHandler,
      }}
      scroll={{
        x: 1300,
      }}
      />
    </div>
  );
};

export default withLayout(Users);
