const siteUrl = 'http://43.204.226.153';

module.exports = {
    siteUrl: siteUrl,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,  
    generateRobotsTxt: true,
    robotsTxtOptions:{
        policies:[
            {
                userAgent:'*', allow:'/'
            }
        ]
    }
}