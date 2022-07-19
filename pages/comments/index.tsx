import { NextPage } from "next";
import { useEffect, useState } from "react";

const Comments : NextPage = ()=>{
    
    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);

    useEffect(()=>{

        async function getCommentList() {
            const response = await fetch('/api/comments');
            const data = await response.json();
            setLoading(false);
            setComments(data);
        }
        getCommentList();

    }, [])

    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(!comments.length) return <h2>Comments not found</h2>

    return (
        <>
        <h1>Lis of Comments</h1>
        {
            comments.map(( comment:any )=>{
                return (
                    <div key={ comment.id }>
                    <h2>{ comment.id } { comment.name }</h2>
                        <hr />
                    </div>
                )
            })
        }
        </>
    )


}

export default Comments;