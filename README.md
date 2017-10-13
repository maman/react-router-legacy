# React Router Legacy [![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Codecov][codecov-badge]][codecov]

*This is a maintained version of react-router v2*

<img src="/logo/vertical@2x.png" height="150"/>

React Router is a complete routing library for [React](https://facebook.github.io/react).

React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.

### Docs & Help

- [Guides and API docs](/docs)
- [Troubleshooting guide](https://github.com/maman/react-router-legacy/blob/master/docs/Troubleshooting.md)
- [Changelog](/CHANGES.md)

### Browser Support

We support all browsers and environments where React runs.

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save react-router-two

Then with a module bundler like [webpack](https://webpack.github.io/) that supports either CommonJS or ES2015 modules, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import { Router, Route, Link } from 'react-router-two'

// not using an ES6 transpiler
var Router = require('react-router-two').Router
var Route = require('react-router-two').Route
var Link = require('react-router-two').Link
```

The UMD build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/react-router-two/umd/ReactRouter.min.js"></script>
```

You can find the library on `window.ReactRouter`.

### What's it look like?

```js
import React from 'react'
import createReactClass from 'create-react-class'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router-two'

const App = createReactClass({/*...*/})
const About = createReactClass({/*...*/})
const NoMatch = createReactClass({/*...*/})

const Users = createReactClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = createReactClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
```

See more in the [Introduction](/docs/Introduction.md), [Guides](/docs/guides/README.md), and [Examples](/examples).

### Versioning and Stability

We want React Router to be a stable dependency that’s easy to keep current. We take the same approach to versioning as React.js itself: [React Versioning Scheme](https://facebook.github.io/react/blog/2016/02/19/new-versioning-scheme.html).

### Thanks

Thanks to [our sponsors](/SPONSORS.md) for supporting the development of
React Router.

React Router was initially inspired by Ember's fantastic router. Many thanks to the Ember team.

[build-badge]: https://img.shields.io/travis/maman/react-router-legacy/master.svg?style=flat-square
[build]: https://travis-ci.org/maman/react-router-legacy

[npm-badge]: https://img.shields.io/npm/v/react-router-two.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-router-two

[codecov-badge]: https://img.shields.io/codecov/c/github/maman/react-router-legacy/master.svg?style=flat-square
[codecov]: https://codecov.io/gh/maman/react-router-legacy
