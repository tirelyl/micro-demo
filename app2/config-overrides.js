const { overrideDevServer } = require("customize-cra");

const addProxy = () => (config) => {
  return {
    ...config,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
};

module.exports = {
  devServer: overrideDevServer(
    addProxy()
  ),
};
