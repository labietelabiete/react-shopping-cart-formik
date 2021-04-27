`#react.js` `#master-in-software-engineering`

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

# Assembler School: React Shopping Cart Formik

In this project you will learn how to create a React.js and how to apply all the
important concepts.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

See deployment for notes on how to deploy the project on a live system.

### The repository

First, you will need to `clone` or `fork` the repository into your Github
account:

<img src="https://docs.github.com/assets/images/help/repository/fork_button.jpg" alt="Fork on GitHub" width='450'>

```
$ git clone https://github.com/assembler-school/react-shopping-cart-formik.git
```

## Contents and Branches Naming Strategy

The repository is made up of several branches that include the contents of each
section.

The branches follow a naming strategy like the following:

- `main`: includes the main contents and the instructions
- `assembler-solution`: includes the solution

### Fetching All the Branches

In order to fetch all the remote branches in the repository, you can use the
following command:

```sh
$ git fetch --all
```

### List Both Remote Tracking Branches and Local Branches

```sh
$ git branch --all
```

Then, you can create a local branch based on a remote branch with the following
command:

```sh
$ git checkout -b <new_branch_name> <remote_branch_name>
```

### Installing

First, you will need to install the dependencies with: `npm install`.

Run the following command in your terminal after cloning the main repo:

```sh
$ npm install
```

### Running the Tests

The tests that validate your solution can be executed by running the following
command:

```
$ npm run test
```

### Git `precommit` and `prepush` Hooks

In the `assembler-solution` branch you can see an implementation of these tools
if you'd like to use them.

## Deployment

In this pill we won't deploy the app.

## Technologies used

- `React.js`
- `@testing-library/react`
- `eslint`
- `prettier`
- `lint-staged`
- `husky`

## Project requirements

This is an overview of the main requirements of this project. The exact ones are
found in the doc that the academic team will provide you.

- You must follow all the instructions of the project step-by-step
- You should always try to solve them by yourself before asking for help
- You should always help your team members and fellow students of the master so
  that you can all learn together and become better software developers and team
  members
- You must finish all the steps that are marked as `Required`
- You must use semantic HTML5 elements for all the markup of the application
- Once you are done, you can move on to the optional ones that are marked as
  `Extra 💯`

### 1. `productSchema`

#### File

```sh
/src/components/NewProductForm/product-schema.js
```

1. complete the schema with the following requirements:

- `title`:
  - min: 2, The title is too short!
  - max: 50, The title is too long!
  - required, The title is too required
- `price`:
  - integer: The price must be an integer
  - positive: The price must be a positive number
  - required, The price is required
- `img`:
  - url: The image url is invalid
  - required, The image url is required
- `shortDescription`:
  - min: 2, The short description is too short!
  - max: 50, The short description is too long!
  - required, The short description is required
- `longDescription`:
  - min: 2, The long description is too short!
  - max: 50, The long description is too long!
  - required, The long description is required
- `unitsInStock`:
  - integer: The units in stock must be an integer
  - positive: The units in stock must be a positive number
  - required, The units in stock is required
- `authorFirstName`:
  - min: 2, The author first name is too short!
  - required, The author first name is required
- `authorLastName`:
  - min: 2, The author last name is too short!
  - required, The author last name is required
- `authorEmail`:
  - email: Invalid email
  - required, Required

#### Test suite name

@TODO

### 2. Product form

#### File

```sh
/src/components/NewProductForm/NewProductForm.js
```

1. add all the missing form inputs that the `initialValues` object defines

```jsx
<Formik
  initialValues={{
    title: "",
    price: 0,
    img: "",
    shortDescription: "",
    longDescription: "",
    unitsInStock: 0,
    authorFirstName: "",
    authorLastName: "",
    authorEmail: "",
  }}
  validationSchema={productSchema}
  onSubmit={(values) => {
    const newProduct = addProductDetails(values);
    saveNewProduct(newProduct);
  }}
></Formik>
```

#### Test suite name

@TODO

## Project delivery

To deliver this project you must follow the steps indicated in the document:

- [Submitting a solution](https://www.notion.so/Submitting-a-solution-524dab1a71dd4b96903f26385e24cdb6)

## Resources

- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
- [reactjs.org](https://reactjs.org/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.danilucaci.com"><img src="https://avatars.githubusercontent.com/u/19062818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dani Lucaci</b></sub></a><br /><a href="https://github.com/assembler-school/vanilla-js-project-template/commits?author=danilucaci" title="Code">💻</a> <a href="https://github.com/assembler-school/vanilla-js-project-template/commits?author=danilucaci" title="Documentation">📖</a> <a href="#example-danilucaci" title="Examples">💡</a> <a href="#tool-danilucaci" title="Tools">🔧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
