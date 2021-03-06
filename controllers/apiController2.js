const mongoose = require('mongoose');
const Post = require('../models/userModel');
const Comment = require('../models/commentModel');

module.exports.index = async function (req, res, next) {
    // select * from post; 
    const posts = await Post.find();

    try {

        res.status(200).json({
            data: posts
        });
       
    } catch (err) {
        res.status(500).json(
            {
                errors: err
            });
    }
}

module.exports.getComments = async function (req, res, next) {

    try {
        const {id} = req.params;
        console.log(`id : ${id}`);
       // const comments = await Comment.find().populate('comment');
        const postWithComments = await Post.findById(id).populate('comments','message user');
        console.log(postWithComments);
        res.status(200).json({
            data: postWithComments
        });
    } catch (err) {
        res.status(500).json(
            {
                error: [{
                    code: 500,
                    message: err.message
                }]
            });
    }
}

module.exports.getTags = async function (req, res, next) {

    try {
        const {id} = req.params;
        console.log(`id : ${id}`);
        const post = await Post.findOne({ _id: id }).select('tags');
        console.log(post);
        res.status(200).json({
            data: post
        });
    } catch (err) {
        res.status(500).json(
            {
                error: [{
                    code: 500,
                    message: err.message
                }]
            });
    }
}

module.exports.getPostById = async (req, res, next) => {
    const { id } = req.params;
    const post = await Post.findOne({ _id: id });
    res.status(200).json({ data: { post } });
}

module.exports.createPost = async (req, res, next) => {
    console.log(req.body);
    const { title ,tags} = req.body;
    console.log(`Title : ${title}`);
    let post = new Post({
        title: title,
        tags : tags
    });

    try {
        await post.save();
        res.status(201).json({ data: { post } });
    } catch (err) {
        res.status(500).json({
            errors: { err }
        });
    }
}

module.exports.updatePost = async (req, res, next) => {

    try {

        const { id } = req.params;
        const { title } = req.body;
        console.log(req.body);
        console.log(`Id : ${req.params.id}`);
        console.log(`title : ${title}`);
        const post = await Post.updateOne({ _id: id },
            { title: title }
        );

        if (post.nModified === 0) {
            throw new Error('Cannot update');
        } else {
            res.status(201).json(
                {
                    message: "Update completed",
                    success: true
                });
        }
    } catch (err) {
        res.status(500).json({
            error: [{
                code: 500,
                message: err.message
            }]
        });
    }
}

module.exports.updatePostSome = async (req, res, next) => {

    try {
        console.log(req.body);
        const { id } = req.params;
        const { title } = req.body;

        console.log(`Id : ${id}`);
        const post = await Post.findByIdAndUpdate(id, {
            title: title
        });

        console.log(`post : ${post}`);

        if (!post) {
            throw new Error('Notthing to update');
        } else {
            res.status(201).json({ data: { post } });
        }

    } catch (err) {
        res.status(500).json({
            errors: {
                code: 500,
                message: err.message
            }
        });
    }
}

module.exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        if (!post) {
            res.status(404).json({ errors: { err } });
        }
        res.status(200).send();
    } catch (err) {
        res.status(500).json({
            errors: {
                code: 500,
                message: "Cannot delete"
            }
        })
    }
}

