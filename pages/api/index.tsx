/**
 * /api
 * @param req 
 * @param res 
 */

const handler = async (req:any, res:any)=>{
    
    if(req.method == 'GET'){
        // Api request method is GET
        const response = await fetch('https://www.google.com/ping?sitemap=http://43.204.226.153/sitemap-0.xml');
        console.log("res=============>>>>",response);
        res.status(200).send("Success");
    }
    else if(req.method == 'POST'){
        // Api request method is POST
    }
}

export default handler;