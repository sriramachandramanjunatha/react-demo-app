import path from 'path'
import webpack from 'webpack'

export default {
    devtool:'eval-source-map',
    entry:['webpack-hot-middleware/client',path.join(__dirname,'/client/index.js')] ,
    output: {
        path:'/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins:[
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.js$/,
                include:[
                  path.join(__dirname,'client'),
                  path.join(__dirname,'server/shared'),
                ],
                use: [{

                    loader:'babel-loader',
                    // loader:'react-hot-loader'
            }]
            }
        ]
    },
    resolve:{
        extensions: [ '*','.js' ]
    }
}
