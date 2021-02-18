module.exports = {
    // 表示要配置config的webpack
    configureWebpack: {
        resolve: {
            // 表示.js  .vue  .css的后缀文件不需要再写了，默认已经配置
            // extensions [],

            // 别名
            alias: {
                // 默认已经配置了下面这行
                // '@': 'src',

                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}