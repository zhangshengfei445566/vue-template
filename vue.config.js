module.exports={
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'views': '@/views',
                'network': '@/network',
                'components': '@/components'
            }
        }
    },
    devServer: {
        port:7777,
        open: true
    }
}