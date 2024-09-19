/* eslint-disable react-refresh/only-export-components */
import { Button, message, Table } from "antd";
import withLayout from "../../core/components/AppLayout/withLayout";
import TitleHeader from "../../core/components/TitleHeader";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { useConversationsQuery } from "../../core/services/redux/api/conversationApi";
import AppLoader from "../../core/components/AppLoader";

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
const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const Dashboard = () => {
  const { data, isLoading } = useConversationsQuery({
    page: 1,
    limit: 5,
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
  if (isLoading) return <AppLoader />;
  return (
    <div style={{ padding: "10px 50px" }}>
      <TitleHeader title="Dashboard" className="mb-[34px]" />
      <Dragger {...props} style={{ marginBottom: "20px" }} accept="audio/mp3">
        <p className="ant-upload-drag-icon">
          <InboxOutlined style={{ color: "#64dfdf" }} />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
      <div className="flex items-center justify-center mb-20">
        <Button
          type="primary"
          style={{ background: " #64dfdf", boxShadow: "none" }}
        >
          Convert
        </Button>
      </div>
      <h2 className="text-slate-800 font-semibold text-[16px] mb-5">
        Recent Uploaded
      </h2>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
};

export default withLayout(Dashboard);
