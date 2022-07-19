import data from '../../../db.json';

/**
 * /api/comments
 * @param req 
 * @param res 
 */

 const handler = (req:any, res:any)=>{
    
    if(req.method == 'GET'){
        // Api request method is GET
        res.status(200).send(data.comments);
    }
    else if(req.method == 'POST'){
        // Api request method is POST
    }
}

export default handler;