/** @type {import('next').NextConfig} */
const nextConfig = {
   
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

