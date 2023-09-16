module.exports = {
  apps: [{
    name: "kobdash",
    script: "./server.sh",
    watch: false,
    instances: 1,
    env: {
      "NODE_ENV": "production",
    }
  }]
}
