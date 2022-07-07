const siteUrl = "http://43.204.226.153"

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions:{
        policies:[
            {
                userAgent:"*", disallow:"/products"
            },
            {
                userAgent:"*", allow:"/"
            }
        ],
        additionalSitemaps:[`${siteUrl}/server-sitemap.xml`]
    },
    sitemapSize: 7000,
    exclude: ["/news"]
}