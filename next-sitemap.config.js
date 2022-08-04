const siteUrl = 'http://52.66.210.90';

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