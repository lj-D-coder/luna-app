/** @type {import('next').NextConfig} */
const nextConfig = {

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
   
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'ui.aceternity.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                pathname: '**',
              },
              {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
              },
        ],
      },
};

export default nextConfig;

