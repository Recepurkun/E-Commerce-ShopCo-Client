// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     compiler: {
//         styledComponents: {
//             displayName: true,
//         },
//     },
// };

// export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
            displayName: true,
        },
    },
};

export default withNextIntl(nextConfig);

