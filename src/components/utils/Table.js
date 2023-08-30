import { Table as AntTable } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setDeletePerson } from "../redux/actions";

export default function Table() {
  const tablePerson = useSelector((s) => s?.tablePerson);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (field) => `${field?.city} | ${field?.street}`,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "id",
      render: (_, record) => (
        <a
          key={record.id}
          onClick={(e) => {
            e.preventDefault();
            dispatch(setDeletePerson(record.id));
          }}
        >
          Delete
        </a>
      ),
    },
  ];

  return <AntTable columns={columns} dataSource={tablePerson} size="small" pagination={false}/>;
}
