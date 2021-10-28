import Post from "./postModel.js";

class PostService {
  async addPost(body) {
    if (!body) {
      throw new Error("Body is Empty");
    }
    const post = await Post.create(body);
    return post;
  }

  async getAllPosts() {
    const posts = await Post.find();
    return posts;
  }

  async getPost(id) {
    if (!id) {
      throw new Error("ID field is required");
    }
    const post = await Post.findById(id);
    return post;
  }

  async updatePost(post) {
    if (!post._id) {
      throw new Error("ID field is required");
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
      new: true,
    });
    return updatedPost;
  }

  async deletePost(id) {
    if (!id) {
      throw new Error("ID Filed is required");
    }
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

export default new PostService();
