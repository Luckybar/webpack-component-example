const path = require('path');

module.exports = {
    entry: './src/index.js', // 你的主要 JavaScript 文件位置
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]' // 這是生成唯一類名的規則
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            }
        ]
    }
};