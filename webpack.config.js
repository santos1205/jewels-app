const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {    
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    //to resolve the extensions
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [{
            test: /.js?/,
            test: /.jsx?/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets:['es2015', 'react'],                
                plugins:['transform-object-rest-spread'],
                plugins: ['transform-class-properties']
            }
        },{
            test: /\.css$/,
            loader: 'style!css-loader' 
        },{
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            loader: 'file'
        }]
    }
}
