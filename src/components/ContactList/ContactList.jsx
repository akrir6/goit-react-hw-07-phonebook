
import { ContactCard } from "components/ContactCard/ContactCard";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "redux/selectors";
import { List, ListItem } from "./ContactList.styled";

export const ContactList = () => {

    return (
        <List>
            {useSelector(selectFilteredContacts).map(({ id, name, phone })=>(
            <ListItem key={id}>
                <ContactCard id={id} name={name} phone={phone}/>
            </ListItem>
            ))}
        </List>
    )

}

