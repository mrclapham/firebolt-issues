const config = {
    verbose: true,
    transformIgnorePatterns: ["/node_modules/(?!@firebolt-js/).*/"],
    transform: { "\.(js|mjs|jsx)$": "babel-jest" },
    moduleFileExtensions: ["js", "jsx", "mjs"],
};

module.exports = config;