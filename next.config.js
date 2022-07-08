/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true, // triggers 308
      }
    ]
  },
  reactStrictMode: true,
  googleServiceAccount:{
    "type": "service_account",
    "project_id": "cms-project-355612",
    "private_key_id": "1e06bf2f224ffaf2f00b77d4fcea198e6ed6f4d6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQsswmmkZ7HFV4\nQwo0oLyqClQaF2Na5yWJI2fW4EFvW6VFITLwEI0PJyOjCR1qgPT32HSlaeoSczcV\nZJROPKrmXkM3voF+9/woiuDWUc8xX/H4u17UOZDQE0NakS9VB7LudjoWt2EfP5WP\nKqeMHZWVw03E/NUsHMS2SnS7lOc26cAPUJD6o50FbCpsSQavmtQunlDL/GqBTtTV\nR7QHGCO88ITOZ+ace9UNla/XIRBlbBK9gADjBf+FiwjsxStHfPhNJPtKaMVDyZWn\ngK2M7Lh6SBjtpvU7J5Jctm3ouLqY4og5+Vg1+Kt8qf5pMr30+7X74V/jgTCh6twY\n2Snd9vnLAgMBAAECggEAAu/a/C75uiohaZCSLbIy8CiL1FUOtGJJWxumR4CtMGVi\nKNwOk/Qt5Vcx1LFAT+QbB1E0cM7R7krfHtpW40lquLg2w51XGYV9jDmfqPDnAu3s\nj4ldtxpM8+irRF8uWEjSZYcH2MxTTC6rDk7HTkel24gvd7Z8tbhEXfkHfPZNbZIZ\n6zcrMKzv7QArwXYl696Vh/EHJuiqmI1a5ZvR7c+Q0QtIVtX5D8Pyf8mjZ21TbdoF\nLl9hxFufbCiBw0CBBVhEDog45jiJN5MUvm4+Kqi0zMNVbB0HBZ+pUe1RYM9vjVis\nyGGY7DR73YWbwIJgHM4LyXaxLrcY7SepjD1gDW/h4QKBgQD2eWFC4xgHY8286DZk\nWeVXT79BgN6niQEyR9Yz7wl015LNHCWF/iO6UUdb46TfKy+69lXCtm2itH3vhe6d\ntOwtukndUsATtWpLXp+uHLJz5drAKg4BHRnHR1nFKRA1zC1iQ8K59eYrvzSFDl8B\nBzZm6eHxLDxeEihpBVO6AAFsYQKBgQDYw6n0CB63d163FRnSZXucRotMj+2GLqzP\ng5s74eqj7qMktCGPRvutEzXFahGRHFlTJpI3lawF90yAH+fbQg0kCg7beTYWm8hb\nHvQbo6z6mXqaeJ7KlASePwV6X6thAcDwrtFTzrWZqSgzor63b2pQ+tOBI3nIyrgn\nYzTMPkO1qwKBgFw0WktQc1vIXV4PLNHrw10fazgRArqACV+K+johcVMxlix/HBZ9\nVVZNM7nPdo06NbfmkXyvDGKyzO3/F54N4dDVgO54F30IAATEGE5lU+kBkw0SbnzC\nKzOeoJmeW/8UK+I34S/6Kqow9G/WSXoz/YkQc8LqPocemdl38bOCbwXhAoGBALrM\nW0CWYsoeT3wc7gS3Ob/htxeCjOFuhbPKqVMAjDE7bFIr/SO4uxhajqMSlhLkSEH0\n4lqOXBFEHSPo2ujDUgm1tToDic4P76g+04SiF2ZaLyLBQa43wocQrkrX+Rt+5GNF\nc9TyNOM3uBJPdGUl2Yvxq6UFCmUz9WDUCGLeYYFDAoGAJGiGvHS1WdzZzzkrvX9h\npg0U2lgnQ6VUQ1gtEp/jpq7wuQEbv+h1cM8HmKHZxJfWaskBQtpaX+EeByg8sjat\nkdcdI2ygtFYBU/r16iyd9hoSKmKXgwCz1HyimqWCvL1Zo6BhcZYHBXcLDEp1i5l9\nme8HRd7Tx9C9qZEzGl9qjKw=\n-----END PRIVATE KEY-----\n",
    "client_email": "cms-content@cms-project-355612.iam.gserviceaccount.com",
    "client_id": "117427766415911399561",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/cms-content%40cms-project-355612.iam.gserviceaccount.com"
  }
  
  
}

module.exports = nextConfig