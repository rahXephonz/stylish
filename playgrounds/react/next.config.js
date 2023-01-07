const LoadablePlugin = require("@loadable/webpack-plugin");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  webpack: config => {
    config.plugins.push(new LoadablePlugin());
    return config;
  },
});

module.exports = nextConfig;
