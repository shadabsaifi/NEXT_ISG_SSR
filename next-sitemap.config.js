const siteUrl = "https://jsonplaceholder.typicode.com"

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