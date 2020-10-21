module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.vue'
  ],
  plugins: [
    require('@tailwindcss/typography')
  ],
}
