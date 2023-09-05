/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "cdn2.thecatapi.com",
  //       port: "",
  //       pathname: "/images/**",
  //       u,
  //     },
  //   ],
  // },
  images: { unoptimized: true },
};

module.exports = nextConfig;

