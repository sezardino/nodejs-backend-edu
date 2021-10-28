import PostService from "./PostService.js";

class PostController {
  async addPost(request, response) {
    try {
      const post = await PostService.addPost(request.body);
      response.json(post);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getAllPosts(_, response) {
    try {
      const posts = await PostService.getAllPosts();
      response.json(posts);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async getPost(request, response) {
    try {
      const post = await PostService.getPost(id);
      response.json(post);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async updatePost(request, response) {
    try {
      const updatedPost = await PostService.updatePost(request.body);
      response.json(updatedPost);
    } catch (error) {
      response.status(500).json(error);
    }
  }

  async deletePost(request, response) {
    try {
      const post = await PostService.deletePost(request.params.id);
      response.json(post);
    } catch (error) {
      response.status(500).json(error);
    }
  }
}

export default new PostController();
