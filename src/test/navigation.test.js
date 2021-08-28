const fetchData = () =>  {
    return Promise.resolve("test");
}

test('the data is test', () => {
    return fetchData().then(data => {
      expect(data).toBe('test');
    });
});

const fetchDataIsRejected = () => {
    return Promise.reject("Daten konnten nicht geladen werden");
}

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataIsRejected().catch(e => expect(e).toMatch('Daten konnten nicht geladen werden'));
});