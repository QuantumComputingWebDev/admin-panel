module.exports = {
    name: "admin-panel",
    script: "serve",
    env: {
        PM2_SERVE_PATH: 'build',
        PM2_SERVE_PORT: 5000
    }
}