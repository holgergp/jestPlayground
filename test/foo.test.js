const foo = require('../src/foo');

test('renders correctly', () => {
  expect(foo.renderSomething()).toMatchSnapshot();
});