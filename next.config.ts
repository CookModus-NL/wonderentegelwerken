import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Twee sessies die tegelijk in deze map bouwen delen anders dezelfde .next en
  // corrumperen elkaars build (voorval 3 sep 2026 op een andere repo). Vercel en de
  // gewone `npm run build` zetten VW_DISTDIR niet en houden dus '.next'.
  // LET OP: Next herschrijft tsconfig.json wanneer distDir afwijkt en zet die map in
  // `include`. Zet die wijziging terug voor je commit — anders reist een sessie-map mee.
  distDir: process.env.VW_DISTDIR || '.next',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Voor het geval foto's later via een CMS komen
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Oude WordPress-paden blokkeren (anti-spam, anti-scan)
      { source: '/wp-admin/:path*', destination: '/', permanent: false },
      { source: '/wp-login.php', destination: '/', permanent: false },
      { source: '/xmlrpc.php', destination: '/', permanent: false },
    ]
  },
}

export default nextConfig
