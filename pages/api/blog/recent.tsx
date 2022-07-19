/**
 * /api/blog/recent
 */

 const handler = (req:any, res:any)=>{
    res.status(200).json({name:"Recent route api"});
}

export default handler;