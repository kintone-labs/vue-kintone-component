const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = async ({ config, mode }) => {
    config.resolve.extensions.push('.ts', '.tsx', '.vue');

    config.module.rules.push({
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'babel-loader',
            },
        ],
    });
    config.module.rules.push({
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'vue-loader',
            },
        ],
    });

    config.plugins.push(new ForkTsCheckerWebpackPlugin());

    return config;
};
