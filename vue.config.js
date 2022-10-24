module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'https://eventeasyau.azurewebsites.net/',
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}