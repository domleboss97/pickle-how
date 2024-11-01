import createJiti from "jiti"

const jiti = createJiti(new URL(import.meta.url).pathname)

// Import env here to validate during build. Using jiti we can import .ts files
jiti("./env/server")
jiti("./env/client")

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source"
    })
    return config
  }
}

export default nextConfig
