export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.contacts.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = state => {
  const normalizedFilter = selectFilter(state).toLowerCase();

  return selectContacts(state).filter(c =>
    c.name.toLowerCase().includes(normalizedFilter)
  );
};
