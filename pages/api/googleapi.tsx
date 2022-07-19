import services from '../../google_service_account.json';
import { google } from 'googleapis';

const handler = async (req:any, res:any)=>{

    try {
        
        const auth = new google.auth.JWT(
            services.client_email,
            '',
            services.private_key,
            ['https://www.googleapis.com/auth/indexing'],
            ''
        )
        const indexer = google.indexing({
            version: 'v3',
            auth
        })
    
        const indexRequest = await indexer.urlNotifications.publish({
            requestBody: {
              type: 'URL_UPDATED',
              url: `http://43.204.226.153`,
            },
        })
        res.status(200).send(indexRequest.data)
    } catch (error) {
        console.log('error :>> ', error)
        res.status(400).send(error)
    }


}

export default handler;