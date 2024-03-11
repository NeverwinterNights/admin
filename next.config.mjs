/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "staging-it-incubator.s3.eu-central-1.amazonaws.com",
        pathname: "/trainee-instagram-api/Image/**",
      },
    ],
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
};

export default nextConfig;
