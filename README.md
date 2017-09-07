## Current status:
Still under heavy development, barley working frontend to show a base.  Backend is working.

**Quick video walkthrough of UI**
[![Quick video walkthrough of UI](https://user-images.githubusercontent.com/15203899/30141751-24425c0c-9332-11e7-861e-a541b81f9d6e.png)](https://photos.app.goo.gl/YGTPDOIK9bY6Udsh1)


The idea behind the database is to resemble nodes in a graph (Circles with lines connecting them at the most basic level).  With this structure you could potentially build anything you can imagine in the digital world, just keep connecting and building things.
Just like those Graphs you remember from Elementary School
![image](https://user-images.githubusercontent.com/15203899/28952061-ba1d6a7e-7883-11e7-8f03-f3492d6d29a6.png)


A few things that I think are required on each Node(Circle) to make it something us mere humans can use are:

* __\_id:__ A unique id, a way for the computer to find it as fast as possible amoungst trillions of other nodes (_ is because we don't want to confuse it with Relay's id)
* __path:__ A URL, that we can memorize and find something as fast as possible.
* __type:__ The type of data this node is holding, it allows the frontend to choose the perfect component to show you.
* __public:__ Are you ok if this node is open to the public?
* __viewers:__ Who is allowed to see this node?
* __order:__ If this node is in a list and you want it sorted in a specific spot in that list.
* __title:__ When you find that thing you will need something to jog your memory, the shortest way to see if this is exactly what it is you are looking for.
* __media:__ A image/video/file/icon/sound.  A way to pair a memory in the mind with another sense, allowing for deeper connections in the brain to be made.
* __subtitle:__ A medium size bit of text to help you remember.
* __description:__ A large size bit of text to help you remember. (Limited character length still)
* __tags:__ Tags will help you find something when your not exactly sure what your looking for.
* __created:__ A date to help filter this from your older stuff.
* __lastUpdated:__ The last time this node was updated (note by updated in this immutable system means it copied another node and then added the edits to the copy).
* __creator:__ The viewer who created this node.
* __editors:__ The people who can edit this node.  (Note edits only create new nodes, databases should be immutable to enable stronger Artificial Intelligence features in the future).
* __value:__ A string value, it has a limit to the amount of characters it can hold, but used to hold text, urls to Storage buckets, or any text.
* __line:__ When you want to point to another node in the graph, this is just a interface for it.  Think of if you wanted to copy something, but not all of it, just the picture.
* __lines:__ A smallish list that does not need pagination (think when you look at youtube and there is 10+ pages of results, you dont want to have to load 100 results right away when the user may only look  at the first 3)
* __linesMany:__ When you have larger lists of items and require pagination, you can also sort these lists by certain values of the nodes


### Side notes

Question: I have a massive JSON/String/file/video/image/audio to store, Datastore wont allow me to save something like that in there... wtf m8.  No worries, you store those things inside your Google Cloud Storage bucket and reference the file with a direct url stored inside a nodes "value" field, then tell it what type of content that node is.


Something to think about when creating anything that collects data today is to NEVER update/delete data. Try to only make copies of data and editing that making your data immutable.  (Think Google Docs, every edit you make its just cloning which allows you to go back to any state of the past).  Not only does it give users the ultime ctrl+Z, but this will also give you something to compare current data to old and vital to future Artificial Intelligence systems.  For a breif introduction on this topic:
[https://youtu.be/-6BsiVyC1kM]
[https://youtu.be/rI8tNMsozo0]
_Or if you want to get deeper topics to research are: Deep Learning, Machine Learning, Artificial Intelligence, Google Cloud Platform AI, TensorFlow_

Frontend showing a few components circles are giving data to
![2017-08-01_12-59-45](https://user-images.githubusercontent.com/15203899/28844430-6e064ec4-76b9-11e7-9041-ac8a31c9ceb8.gif)

A look at the GraphQL side of what the circles look like
![2017-07-31_18-07-05](https://user-images.githubusercontent.com/15203899/28805275-ab6f92f8-761d-11e7-9187-009390ddb749.gif)

Example of what a Circle looks like that gets entered into the Database (Google Datastore)
_A benefit Datastore has is that empty values are not added to a individual entity (model/row)_
![image](https://user-images.githubusercontent.com/15203899/28951449-de6e863c-787f-11e7-8569-0bc64f216a1a.png)


## To start get the project up and running

clone
```
	git clone https://github.com/DaveyEdwards/myiworlds.git
```

## What you need on your computer to run the project:
__watchman__ https://facebook.github.io/watchman/docs/install.html
__flow__ https://flow.org/en/docs/install/
__yarn__ https://yarnpkg.com/lang/en/docs/install/



In the following examples I use yarn instead of npm.  Example yarn install or yarn run seed.datastore will be npm install or npm run seed.datastore.  If you havn't tried out yarn, it is where people who use this stack are moving towards.  To find more about it click (HERE)[https://yarnpkg.com/lang/en/]

Install
```
	yarn install
```

Create account and setup Google Cloud Platform
[https://github.com/DaveyEdwards/myiworlds/tree/master/src/data/GoogleCloudPlatform]


You can now seed your database with the following command in the console
```
	yarn run seed.datastore
```

You are all done with setting up your backend, and can run your application with:
```
	yarn start
```

Start your relay compiler (requires [Watchman](https://facebook.github.io/watchman/) to be installed globally to your machine)
```
	yarn run relay -- --watch
```

# This project was built off of the following
A big thanks to Koistya for building the base of this with his React-Starter-Kit/relay-modern branch [https://github.com/koistya/react-starter-kit]

## React Starter Kit — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" web app boilerplate &nbsp; <a href="https://github.com/kriasoft/react-starter-kit/stargazers"><img src="https://img.shields.io/github/stars/kriasoft/react-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a> <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

[React Starter Kit](https://www.reactstarterkit.com) is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/), [GraphQL](http://graphql.org/) and
[React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

**See** [getting started guide](./docs/getting-started.md), [demo][demo],
[docs](https://github.com/kriasoft/react-starter-kit/tree/master/docs),
[roadmap](https://github.com/kriasoft/react-starter-kit/projects/1) &nbsp;|&nbsp;
**Join** [#react-starter-kit][chat] chat room on Gitter &nbsp;|&nbsp;
**Visit our sponsors**:<br><br>

[![Rollbar - Full-stack error tracking for all apps in any language](https://koistya.github.io/files/rsk/rollbar.png)](https://rollbar.com/?utm_source=reactstartkit(github)&utm_medium=link&utm_campaign=reactstartkit(github)) &nbsp;&nbsp;
[![Localize - Translate your web app in minutes](https://koistya.github.io/files/rsk/localize.png)](https://localizejs.com/?cid=802&utm_source=rsk)


### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project
    ([Node.js](https://nodejs.org/) >= 6.5)
  * Check the [code recipes](./docs/recipes) used in this boilerplate, or share yours


### Customization

The `master` branch of React Starter Kit doesn't include a Flux implementation or any other
advanced integrations. Nevertheless, we have some integrations available to you in *feature*
branches that you can use either as a reference or merge into your project:

  * [feature/redux](https://github.com/kriasoft/react-starter-kit/tree/feature/redux) — isomorphic
    Redux by [Pavel Lang](https://github.com/langpavel)
    (see [how to integrate Redux](./docs/recipes/how-to-integrate-redux.md)) (based on `master`)
  * [feature/apollo](https://github.com/kriasoft/react-starter-kit/tree/feature/apollo) — isomorphic
    Apollo Client by [Pavel Lang](https://github.com/langpavel)
    (see [Tracking PR #1147](https://github.com/kriasoft/react-starter-kit/pull/1147)) (based on `feature/redux`)
  * [feature/react-intl](https://github.com/kriasoft/react-starter-kit/tree/feature/react-intl) —
    isomorphic Redux and React Intl by [Pavel Lang](https://github.com/langpavel)
    (see [how to integrate React Intl](./docs/recipes/how-to-integrate-react-intl.md)) (based on `feature/redux`)
  * [feature/bootstrap3](https://github.com/kriasoft/react-starter-kit/tree/feature/bootstrap3) ***unmaintained*** —
    Simplest possible integration of [react-bootstrap](https://react-bootstrap.github.io/)
    by [Pavel Lang](https://github.com/langpavel) (based on `master`)

You can see status of most reasonable merge combination as [PRs labeled as `TRACKING`](https://github.com/kriasoft/react-starter-kit/labels/TRACKING)

If you think that any of these features should be on `master`, or vice versa, some features should
removed from the `master` branch, please [let us know](https://gitter.im/kriasoft/react-starter-kit).
We love your feedback!


### Comparison

<table width="100%">
  <tr>
    <th>&nbsp;</th>
    <th>
      <p>React Starter Kit</p>
      <a href="https://github.com/kriasoft/react-starter-kit"><img src="https://img.shields.io/github/stars/kriasoft/react-starter-kit.svg?style=social&label=~react-starter-kit" height="20"></a>
      <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=@ReactStarter" height="20"></a>
    </th>
    <th>
      <p>React Static Boilerplate</p>
      <a href="https://github.com/kriasoft/react-static-boilerplate"><img src="https://img.shields.io/github/stars/kriasoft/react-static-boilerplate.svg?style=social&label=~react-static-boilerplate" height="20"></a>
      <a href="https://twitter.com/ReactStatic"><img src="https://img.shields.io/twitter/follow/ReactStatic.svg?style=social&label=@ReactStatic" height="20"></a>
    </th>
    <th>
      <p>ASP.NET Core Starter Kit</p>
      <a href="https://github.com/kriasoft/aspnet-starter-kit"><img src="https://img.shields.io/github/stars/kriasoft/aspnet-starter-kit.svg?style=social&label=~aspnet-starter-kit" height="20"></a>
      <a href="https://twitter.com/dotnetreact"><img src="https://img.shields.io/twitter/follow/dotnetreact.svg?style=social&label=@dotnetreact" height="20"></a>
    </th>
  <tr>
  <tr>
    <th align="right">App type</th>
    <td align="center"><a href="http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/">Isomorphic</a> (universal)</td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Single-page_application">Single-page application</a></td>
    <td align="center"><a href="https://en.wikipedia.org/wiki/Single-page_application">Single-page application</a></td>
  </tr>
  <tr>
    <th colspan="4">Frontend</th>
  <tr>
  <tr>
    <th align="right">Language</th>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">JavaScript (ES2015+, JSX)</td>
  </tr>
  <tr>
    <th align="right">Libraries</th>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/kriasoft/universal-router">Universal Router</a>
    </td>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/reactjs/redux">Redux</a>
    </td>
    <td align="center">
      <a href="https://github.com/facebook/react">React</a>,
      <a href="https://github.com/ReactJSTraining/history">History</a>,
      <a href="https://github.com/reactjs/redux">Redux</a>
    </td>
  </tr>
  <tr>
    <th align="right">Routes</th>
    <td align="center">Imperative (functional)</td>
    <td align="center">Declarative</td>
    <td align="center">Declarative, cross-stack</td>
  </tr>
  <tr>
    <th colspan="4">Backend</th>
  <tr>
  <tr>
    <th align="right">Language</th>
    <td align="center">JavaScript (ES2015+, JSX)</td>
    <td align="center">n/a</td>
    <td align="center">C#, F#</td>
  </tr>
  <tr>
    <th align="right">Libraries</th>
    <td align="center">
      <a href="https://nodejs.org">Node.js</a>,
      <a href="http://expressjs.com/">Express</a>,
      <a href="http://docs.sequelizejs.com/en/latest/">Sequelize</a>,<br>
      <a href="https://github.com/graphql/graphql-js">GraphQL</a></td>
    <td align="center">n/a</td>
    <td align="center">
      <a href="https://docs.asp.net/en/latest/">ASP.NET Core</a>,
      <a href="https://ef.readthedocs.io/en/latest/">EF Core</a>,<br>
      <a href="https://docs.asp.net/en/latest/security/authentication/identity.html">ASP.NET Identity</a>
    </td>
  </tr>
  <tr>
    <th align="right"><a href="https://www.quora.com/What-are-the-tradeoffs-of-client-side-rendering-vs-server-side-rendering">SSR</a></th>
    <td align="center">Yes</td>
    <td align="center">n/a</td>
    <td align="center">n/a</td>
  </tr>
  <tr>
    <th align="right">Data API</th>
    <td align="center"><a href="http://graphql.org/">GraphQL</a></td>
    <td align="center">n/a</td>
    <td align="center"><a href="https://docs.asp.net/en/latest/tutorials/first-web-api.html">Web API</a></td>
  </tr>
</table>


### Backers

♥ React Starter Kit? Help us keep it alive by donating funds to cover project
expenses via [OpenCollective](https://opencollective.com/react-starter-kit) or
[Bountysource](https://salt.bountysource.com/teams/react-starter-kit)!

<a href="http://www.nekst.me/" target="_blank" title="lehneres">
  <img src="https://github.com/lehneres.png?size=64" width="64" height="64" alt="lehneres">
</a>
<a href="http://www.vidpanel.com/" target="_blank" title="Tarkan Anlar">
  <img src="https://github.com/tarkanlar.png?size=64" width="64" height="64" alt="Tarkan Anlar">
</a>
<a href="https://morten.olsen.io/" target="_blank" title="Morten Olsen">
  <img src="https://github.com/mortenolsendk.png?size=64" width="64" height="64" alt="Morten Olsen">
</a>
<a href="https://twitter.com/adamthomann" target="_blank" title="Adam">
  <img src="https://github.com/athomann.png?size=64" width="64" height="64" alt="Adam">
</a>
<a href="http://dsernst.com/" target="_blank" title="David Ernst">
  <img src="https://github.com/dsernst.png?size=64" width="64" height="64" alt="David Ernst">
</a>
<a href="http://zanehitchcox.com/" target="_blank" title="Zane Hitchcox">
  <img src="https://github.com/zwhitchcox.png?size=64" width="64" height="64" alt="Zane Hitchcox">
</a>
<a href="https://opencollective.com/react-starter-kit" target="_blank">
  <img src="https://opencollective.com/static/images/become_backer.svg" width="64" height="64" alt="">
</a>


### How to Contribute

Anyone and everyone is welcome to [contribute](CONTRIBUTING.md) to this project. The best way to
start is by checking our [open issues](https://github.com/kriasoft/react-starter-kit/issues),
[submit a new issues](https://github.com/kriasoft/react-starter-kit/issues/new?labels=bug) or
[feature request](https://github.com/kriasoft/react-starter-kit/issues/new?labels=enhancement),
participate in discussions, upvote or downvote the issues you like or dislike, send [pull
requests](CONTRIBUTING.md#pull-requests).


### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started with GraphQL and Relay](https://quip.com/oLxzA1gTsJsE)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Enzyme — JavaScript Testing utilities for React](http://airbnb.io/enzyme/)
  * [Flow — A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)


### Related Projects

  * [GraphQL Starter Kit](https://github.com/kriasoft/graphql-starter-kit) — Boilerplate for building data APIs with Node.js, JavaScript (via Babel) and GraphQL
  * [Membership Database](https://github.com/membership/membership.db) — SQL schema boilerplate for user accounts, profiles, roles, and auth claims
  * [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit) — Boilerplate for authoring JavaScript/React.js libraries


### Support

  * [#react-starter-kit](http://stackoverflow.com/questions/tagged/react-starter-kit) on Stack Overflow — Questions and answers
  * [#react-starter-kit](https://gitter.im/kriasoft/react-starter-kit) on Gitter — Watch announcements, share ideas and feedback
  * [GitHub issues](https://github.com/kriasoft/react-starter-kit/issues), or [Scrum board](https://waffle.io/kriasoft/react-starter-kit) — File issues, send feature requests
  * [appear.in/react](https://appear.in/react) — Open hours! Exchange ideas and experiences (React, GraphQL, startups and pet projects)
  * [@koistya](https://twitter.com/koistya) on [Codementor](https://www.codementor.io/koistya), or [Skype](http://hatscripts.com/addskype?koistya) — Private consulting


### License

Copyright © 2014-present Kriasoft, LLC. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/kriasoft/react-starter-kit/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

---
Made with ♥ by Konstantin Tarkus ([@koistya](https://twitter.com/koistya)) and [contributors](https://github.com/kriasoft/react-starter-kit/graphs/contributors)

[rsk]: https://www.reactstarterkit.com
[demo]: http://demo.reactstarterkit.com
[node]: https://nodejs.org
[chat]: https://gitter.im/kriasoft/react-starter-kit
