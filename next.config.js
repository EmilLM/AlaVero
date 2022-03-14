module.exports = {
  reactStrictMode: true,
  compiler: {
    relay: {
      // This should match relay.config.js
      src: "./src",
      schema: "./src/schemas/schema.graphql",
      artifactDirectory: "./src/gql/__generated__",
      // language: 'typescript',
      exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
    },
  },
}
