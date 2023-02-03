import React,{useState} from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function GetAxios() {

    const [post, setPost] = useState(null);
    
    React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
        return(
            <>
                <h1>Title : {post.title}</h1>
                <p>Body : {post.body}</p>
                <p>User Id : {post.userId}</p>
                <p>Id : {post.id}</p>
            </>
        )
}

export default GetAxios;