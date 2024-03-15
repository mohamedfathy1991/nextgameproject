/** @type {import('next').NextConfig} */
const nextConfig = {
 
    output: 'export',
      
            images: {
              remotePatterns: [
                {
                  protocol: 'https',
                  hostname: 'freetogame.com',
                  port: '',
                  pathname: '/g/**/**',
                },
              ],
            },
          
};
export default nextConfig;
