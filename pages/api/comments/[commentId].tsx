import data from '../../../db.json';

/**
 * /api/comments/2 where 2 is commentId
 * @param req 
 * @param res 
 */

 const handler = (req:any, res:any)=>{


    if(req.method == 'GET'){
        // Api request method is GET
        const { commentId } = req.query;
        const comment = data.comments.find((comment)=> comment.id == parseInt(commentId) );
        res.status(200).json(comment);
    }
    else if(req.method == 'DELETE'){
        // Api request method is DELETE
    }

}

export default handler;