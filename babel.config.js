module.exports = api => {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/env",
        {
          useBuiltIns: "usage",
          corejs: 3,
          targets: {
            node: "current"
          }
        }
      ],
      "@babel/typescript"
    ],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["./src"]
        }
      ],
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-proposal-optional-chaining",
      ["@babel/plugin-proposal-nullish-coalescing-operator", { loose: true }]
    ],
    env: {
      development: {
        plugins: []
      }
    }
  };
};
