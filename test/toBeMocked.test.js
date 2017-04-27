const myMock = jest.fn();

test('does mocking work', () => {
  bar(myMock)
  expect(myMock.mock.calls.length).toBe(1);
   expect(myMock.mock.calls[0][0]).toBe("First");
});

function bar(collab) {
    collab("First");
}