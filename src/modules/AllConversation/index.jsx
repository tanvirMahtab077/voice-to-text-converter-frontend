/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { Button, Table } from "antd";
import withLayout from "../../core/components/AppLayout/withLayout";
import TitleHeader from "../../core/components/TitleHeader";
import { useConversationsQuery } from "../../core/services/redux/api/conversationApi";
import AppLoader from "../../core/components/AppLoader";
import { useState } from "react";

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Audio",
    dataIndex: "audio",
    key: "audio",
  },
  {
    title: "Text",
    dataIndex: "text",
    key: "text",
  },
  {
    title: "Download Text",
    dataIndex: "downloadText",
    key: "downloadText",
  },
  {
    title: "Q/A",
    dataIndex: "qa",
    key: "qa",
  },
  {
    title: "Download Q/A",
    dataIndex: "downloadQa",
    key: "downloadQa",
  },
  {
    title: "Date and Time",
    dataIndex: "dataAndTime",
    key: "dataAndTime",
  },
];
const AllConversation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading } = useConversationsQuery({
    page: currentPage,
    limit: pageSize,
  });
  const dataSource = data?.data?.map((conv) => ({
    key: conv._id,
    id: conv.conversationId,
    audio: (
      <audio controls="controls">
        <source src={conv.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    ),
    text: <Button>View Text</Button>,
    downloadText: <Button>Download Text</Button>,
    qa: <Button>View Q/A</Button>,
    downloadQa: <Button>Download Q/A</Button>,
    dataAndTime: "23, jun 204",
  }));
  const onChangeHandler = (page) => {
    setCurrentPage(page);
  };
  if (isLoading) return <AppLoader />;
  console.log(data);
  return (
    <div style={{ padding: "10px 50px" }}>
      <TitleHeader title="All Conversation" className="mb-[34px]" />
      <Table
        dataSource={dataSource}
        columns={columns}
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

export default withLayout(AllConversation);
