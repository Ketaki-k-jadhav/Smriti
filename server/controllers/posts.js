import PostMessage from '../models/postMessage,js';

//retrieving data from database takes some time so this is an asynchronous function
export const getPosts=async(req,res) => {
    try {

        const postMessages=await PostMessage.find();
        res.status(200).json(postMessages); //returns array of all posts

    } catch(error) {
        
        res.status(404).json({ message:error.message })
    }
    
}

export const createPosts=async(req,res) => {
    const post=req.body;
    const newPost=new PostMessage(post);

    try{

        await newPost.save();   //add await in front of asynchronous actions
        res.status(201).json(newPost);

    } catch(error){

        res.status(409).json({message:error.message});
    }
}
