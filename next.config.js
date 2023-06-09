/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")(["gsap"]);

// module.exports = withTM({});
const nextConfig = {
  // output: "export",
  experimental: {
    appDir: true,
  },
  build: {
    transpile: ["gsap"],
  },
};

module.exports = nextConfig;
