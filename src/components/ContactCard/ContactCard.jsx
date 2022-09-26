import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeContact } from "redux/operations";
import { Text, Button } from "./ContactCard.styled";

export const ContactCard = ({ id, name, phone }) => {
    const dispatch = useDispatch();

    return (
        <>
            <Text>{name}</Text>
            <Text>{phone}</Text>
            <Button type="button" onClick={()=>dispatch(removeContact(id))}>Delete</Button>
        </>
    )
}

ContactCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
}