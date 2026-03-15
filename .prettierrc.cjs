module.exports = {
    extends: '@it-incubator/prettier-config',
    plugins: ['prettier-plugin-tailwindcss'], // sort style tailwind
    tailwindFunctions: ['clsx', 'cn', 'twMerge'], // add sort style tailwind for 'clsx', 'cn', 'twMerge'
}