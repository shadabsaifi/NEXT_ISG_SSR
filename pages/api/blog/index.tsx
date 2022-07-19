/**
 * /api/blog
 */

const handler = (req:any, res:any)=>{
    
    if(req.method == 'GET'){
        res.status(200).json({name:"Blog route api"});
    }
    else if(req.method == 'POST'){

    }
    else if(req.method == 'DELETE'){

    }
    else if(req.method == 'PUT'){

    }
    else{

    }
}

export default handler;