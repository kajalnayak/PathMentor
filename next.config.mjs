// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;






// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "randomuser.me",
//         },
//       ],
//     },

//     env: {
//       GEMINI_API_KEY: process.env.GEMINI_API_KEY,
//     },
//   };
  
//   export default nextConfig;
















// @type {import('next').NextConfig}
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  env: {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  },

  experimental: {
    turbo: false, // 👈 disables Turbopack
  },
}

export default nextConfig
