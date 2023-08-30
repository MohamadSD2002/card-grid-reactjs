import { Avatar, Card as AntCard } from "antd";
import { useDispatch } from "react-redux";
import { setTablePerson } from "../redux/actions";
const { Meta } = AntCard;

export default function Card({ person, personId }) {
  const dispatch = useDispatch()
  return (
    <AntCard
      style={{
        width: 200,
        marginTop: 10,
      }}
      onClick={() => dispatch(setTablePerson(person))}
    >
      <Meta
        avatar={
          <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${personId}`} />
        }
        title={person.name}
        // description="This is the description"
      />
    </AntCard>
  );
}
