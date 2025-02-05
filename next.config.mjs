
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dyucoj5gx",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "pgfemkg9",
      },
}

export default nextConfig

