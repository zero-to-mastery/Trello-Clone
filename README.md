# Trello-Clone

A clone of trello, mimicking its basic functionality.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Installation:

1.  Clone or download this repository.
2.  Navigate to the project folder: `cd Trello-Clone`

_You’ll need to have [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm), or [Yarn](https://yarnpkg.com/en/) on your local development machine._

**_Please make sure to have one of them installed before proceeding._**

3.  Install the dependencies: `npm install` / `yarn install`
4.  Install [Git flow](http://aprendegit.com/instalacion-de-git-flow/) in your machine and run the command `git flow init` in your repository to setup it with the default configuration. This is because the work flow this tool give us, make the development a lot of easier and manageable. It's nothing new, just a shorthand of multiple git commands at once.
    **_More info here_** --> [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
5.  Get familiar with the basic scripts around this app to understand the development flow:
    ##### As you can see in the image below, there are three important commands:
    ![package_scripts](https://image.ibb.co/nPuct0/scripts.png)

- `npm start`: Initialize the development server with the watcher compiling our css. We're using [PostCSS](https://postcss.org/) to allow us use the next css features, imports, nested rules, automatic prefixers and so on... It's like using babel for javascript.
- `npm build`: Generate the production build that is ready to deploy.
- `npm test`: Search and run all Javascript files that ends with **test.js** and execute the appropiate tests. [Jest](https://jestjs.io/) for the unit tests and [Enzyme](https://airbnb.io/enzyme/) for the react components.

---

## CSS Framework:

![semantic-ui](https://react.semantic-ui.com/logo.png)
