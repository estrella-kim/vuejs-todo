const path = require('path');

module.exports  = {
    entry : {
        index : './src/views/index',
        todo : './src/views/todo'
    },
    output : {
        filename :'[name].bundle.js',
        path : path.resolve(__dirname, './public')
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "babel-loader" //use option으로 정렬
            },
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : "eslint-loader",
                options : {
                    //eslint rules
                }
            },
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    }
}