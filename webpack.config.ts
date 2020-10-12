// eslint-disable-next-line import/no-nodejs-modules
import path from 'path';
import { BundleStatsWebpackPlugin } from 'bundle-stats-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import ForkTsCheckerNotifierWebpackPlugin from 'fork-ts-checker-notifier-webpack-plugin';
// import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import type { Configuration, WebpackPluginInstance } from 'webpack';
import type { Options as TsLoaderOptions } from 'ts-loader';

const config: Configuration = {
    entry: { index: './src/index.ts' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: 'index.js',
    },
    externals: ['vue'],
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true,
                            // compilerOptions: {
                            //     declaration: process.env.NODE_ENV == 'production',
                            // },
                            // transpileOnly: true,
                        } as TsLoaderOptions,
                    },
                ],
            },
        ],
    },
    plugins: ((): Configuration['plugins'] => {
        const plugins: Configuration['plugins'] = [
            // new ForkTsCheckerWebpackPlugin({
            //     async: true,
            // }),
            // new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true, skipSuccessful: true }),
            new CleanWebpackPlugin(),
        ];

        if (process.env.REPORT) {
            plugins.push(
                new BundleStatsWebpackPlugin({
                    compare: false,
                    outDir: '../',
                }) as WebpackPluginInstance
            );
        }

        return plugins;
    })(),
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    // stats: {
    // chunkModules: true,
    // preset: 'minimal',
    // },
};

export default config;
