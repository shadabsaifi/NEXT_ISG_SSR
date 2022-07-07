/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      },
    ];
  },
  reactStrictMode: true,
  googleServiceAccount:{
    "type": "service_account",
    "project_id": "registration-199209",
    "private_key_id": "8a8ab8804434e68c3e0c662659736ee0e4f24d7f",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuT0GmXEBSfzOm\n6+ZLoQEVWH4lyME69elBzBQuPT2o7DpGegbsV9S6/7FUIm2wTdacoHqM8pl1PDYH\nb9zo4EPwhfNm2/ClrdCNYqgCzJzF+7BDIHOxgWmil5Ur83zD+gEGgEo8JHJEvBUo\nWZoom2jwRe13XTC0oqZomJg0IBGsQc7eNJG4BL7hNtYZ6b295Whb1MK6xx0yUgUf\ncYoBOb+KpFcr7//P2414GH4xG3jedT5eqogJmAXbUWSVC5WsWqwejinJtdMwLCXm\nVW+v0EuhonvZXyz7Ouk+nRmFvSEq7sAOpkqOsTqOBviV9P50K5usZc8YAjpCNbcG\nN05VOgnPAgMBAAECggEAALFe9O7T8KAB0A2K/kz3CKMv6S2JmxbkJPdPMznaF2RM\n/P+6LFFTDqU6ireSUQuWKUw4AHxsYLtrCY+HxMMzce7OX1/LbpUoyY8VVOGEVAMi\nmbm0zAVUKqnIlYKjwdGqFGEJKoEIlT5cJStqAfRQL/hPL9TGf0lQOQU2QarI9zLQ\nFChz3b3Il1izSDhlWH9LJSht88vhyF0wrKYB2z55ePn4JEkvxbdsZo+zBFOVzvLD\nOfBERCAiv3lnOFgq5QZmxuoZVLA0J+6R6OBlPb8Y6df6z10CQ47QQGrrHvgJBWF0\nNE2AxwhYFSLJa8XXtpcPiSGM2BXQ6V0GFditbepQxQKBgQDpTYdGGF1ak1iNU2Q3\nJFsYY916CBoi7d5dvHOR+JJ8vuspJs0q24oCHjsjf8ZPz1ZeLe+97JeqDF4FVOXm\nQ8cbXNaZHqiUzAd8cH7IvMQTPer/R/x7M892aFX/3w64Hb3/U+HdYYNgSXpmQ6h0\nCptvfYPCkzOn7726MqlkQla/ZQKBgQC/RHwipmLD/fsl93uiOJrg9+SA+49rCgGe\ns2WkQVOEMfvjktE1W0/0hIPZcF9YsDfDfl8x5ZLouLDY3X5jDtt/vWqr5vbLR2wQ\nsvV+BtxmordV541RaATw495m5+EH2CXb/l8gfSbcQL8gREgh0XZ/hsCpIWTuhaJL\nkm+rlF3zIwKBgQCe3M3qKxkWXhMEWO56peTp3MapG+9ALZ0nUvWXRh3pl89lfChk\nsI1vF8rJR25wVgzHoJwJRZuYjUdQdhj+DNT9iuAN79R3Td8jGy8Z3X/eYmEsZ4ZD\nFmqEhFNbIjZRpN8Fh8bbClV9MUuJazS/n6Fr75nS2o1oI1Wb/ndd79ZGCQKBgDR9\nFdfoc1g33fFIXlxhTleIj+O5pV0JjPJBZxZRexrfILIOO216FpISv6AvT2smSNdU\nWcl2p/9Hl/ibqDCFBkWi9KAiLP4SJpzaj7Y7KcbcxpVDiyuY8SouTn1NCxs8/P7H\natGepshw2EKBmo31TqCmmT6Q1IMEl0pH8G9UswejAoGAOgOR+HIoPKfHn72vii3d\n5QcVoF8qFq+ER6YTwB8k2jXYmCG5HqcZ9wN25m4hdp8vVbpLD7fHYLZtsfL0TeW5\nqfa7OyBiXbwdESL5oEZCrG2LSQmRf5EGBU8Ih4wxdfBLDol031WIJDkrbPQH5wFV\nAmnF2mQLj5fy1posvoLr/LM=\n-----END PRIVATE KEY-----\n",
    "client_email": "cms-project@registration-199209.iam.gserviceaccount.com",
    "client_id": "114145988754897827198",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cms-project%40registration-199209.iam.gserviceaccount.com"
  }
  
  
}

module.exports = nextConfig