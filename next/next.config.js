/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     serverActions: true
    // }
    // resolve: {
    //     alias: {
    //       base: path.resolve(__dirname, '')
    //     }
    //   }
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
