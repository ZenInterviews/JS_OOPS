/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                gray: {
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827'
                },
                blue: {
                    500: '#3b82f6'
                },
                green: {
                    600: '#16a34a'
                },
                red: {
                    100: '#fee2e2',
                    200: '#fecaca',
                    800: '#991b1b',
                    900: '#7f1d1d'
                },
                white: '#ffffff',
                black: '#000000'
            }
        }
    },
    plugins: []
};
