import { useEffect } from "react";
import Card from "../utils/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPersons } from "../redux/actions";
import { Col, Row } from "antd";
import Table from "../utils/Table";

export default function Home() {
  const dispatch = useDispatch();

  const persons = useSelector((s) => s?.persons);

  useEffect(() => {
    dispatch(getPersons())
  }, []);

  return (
    <div>
      <Row>
        <Col span={5}>
          <ul>
            {persons.map((person) => (
              <Card key={person.id} person={person} personId={person.id} />
            ))}
          </ul>
        </Col>
        <Col span={19}>
          <Table />
        </Col>
      </Row>
    </div>
  );
}
