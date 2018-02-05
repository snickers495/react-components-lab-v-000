// Make sure to import React and ReactDOM
import ReactDOM from 'react-dom';
import React from 'react';

class OlderCoaster extends React.Component {
  render(
    return React.createElement('div', {className: },
      React.createElement('p', {}, 'You shouldn\'t look too far.'),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    )
  )
}

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  render(
  return React.createElement('div', {className:"oldercoaster"},
    React.createElement('p', {}, 'Two grannies having the time of their life!'),
    React.createElement('p', {}, 'Passengers:'),
    React.createElement('ul', {}, [
      React.createElement('li', {}, 'Agnes'),
      React.createElement('li', {}, 'Muriel'),
    ])
  )
)};
export class InFrontOfYou extends React.Component {
  render(
    return React.createElement('div', {},
      React.createElement('p', {}, 'You shouldn\'t look too far.'),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    )
  )
};
export class ButcherShop extends React.Component {};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('global')
);
