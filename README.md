# rohanchandra.dev

Code for Rohan's personal website: [rohanchandra.dev](https://rohanchandra.dev).

## Stack

Built with [Gatsby](https://www.gatsbyjs.com/) (+ [TypeScript](https://www.typescriptlang.org/) + [React](https://reactjs.org/) + [Styled Components](https://styled-components.com/) + [GraphQL Code Generator](https://www.graphql-code-generator.com/) + [MDX](https://mdxjs.com/)).

Tested with [Cypress](https://www.cypress.io/).

Deployed with [Cloudflare](https://www.cloudflare.com/) (CloudFlare Pages, DNS, Firewall, Caching).

## Development

### Requirements

```sh
yarn install
```

### Running

To start local development server at http://localhost:8000/:

```sh
yarn develop
```

### Code generation

To generate GraphQL types:

```sh
yarn codegen:watch
```

Note, the website must be running locally.

### Tests

To run end-to-end tests:

```sh
yarn test:dev
```

You can also build and test the production build with:

```sh
yarn test:ci
```

## Blog

Source files for blog posts are available at `./content/blog`.

## License

Code is licensed under The MIT License (see `LICENSE` file). Blog posts under `./content/blog` are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).
