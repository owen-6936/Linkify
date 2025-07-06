export const apps = [
  {
    name: "linkify-app",
    script: "./server.js",
    watch: true,
    ignore_watch: ["node_modules", "logs", ".git"],
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
      HOSTNAME: "https://lnkfy.cfd",
    },
  },
];
