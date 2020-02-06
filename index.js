require("@babel/register")({
  extensions: [".js", ".ts"]
});
require("regenerator-runtime/runtime");
require("core-js/stable");
require("./src/server.ts");
