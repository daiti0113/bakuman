export default {
  name: "bakuman",
  version: "1.0.0",
  slug: "bakuman",
  orientation: "portrait",
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    "**/*"
  ],
  ios: {
    supportsTablet: true
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  // expoで使用する環境変数を設定する
  extra: {
    // eslint-disable-next-line no-undef
    env: process.env.NODE_ENV !== "production" ? "development" : "production"
  }
}