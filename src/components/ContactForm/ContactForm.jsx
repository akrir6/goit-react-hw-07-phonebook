import { useState } from "react";
import { Input, Label, Button, Form } from "./ContactForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "redux/operations";
import { selectContacts } from "redux/selectors";

export const ContactForm = ()=> {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  
  const handleAddContact = (e) => {
    e.preventDefault();
    if (contacts.find(c => c.name === name)) {
      return alert(`${name} already exists in contacts list.`);
    }

    dispatch(addNewContact({ name, phone }));
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setPhone('');
  }
  
  return (
    <>
      <Form onSubmit={handleAddContact}>
        <Label>
          Name 
          <Input
            type="text"
            value={name}
            onChange={(e)=>setName(e.currentTarget.value)}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Phone
          <Input
            type="tel"
            value={phone}
            onChange={(e)=>setPhone(e.currentTarget.value)}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">
          Add contact
        </Button>
      </Form>
    </>
  )
}
