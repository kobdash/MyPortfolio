module.exports = {
  apps: [{
    name: "kobdash",
    script: "./server.js",
    watch: false,
    instances: 1,
    env: {
      "NODE_ENV": "production",
    }
  }]
}
