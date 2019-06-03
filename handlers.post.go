package main

import (
	"github.com/gin-gonic/gin"
	"strconv"
)

func showIndexPage(c *gin.Context) {
	render(c, gin.H{"title": "Home Page"}, "index.html")
}
func showPostlist(c *gin.Context) {
	posts := getAllPosts()
	render(c, gin.H{"title": "Post List", "payload": posts}, "post-list.html")
}
func showPostCreationPage(c *gin.Context) {
	render(c, gin.H{"title": "Create New Post"}, "create-post.html")
}

func getPost(c *gin.Context) {
	// Check if the post ID is valid
	if postID, err := strconv.Atoi(c.Param("post_id")); err == nil {
		// Check if the post exists
		if post, err := getPostByID(postID); err == nil {
			render(c, gin.H{"title": post.Title, "payload": post}, "post.html")
		} else {
			//c.AbortWithError(http.StatusNotFound, err)
			render(c, gin.H{
				"title": "Not Found",
			}, "searchnotfound.html")
		}

	} else {
		//c.AbortWithStatus(http.StatusNotFound)
		render(c, gin.H{
			"title": "Not Found",
		}, "searchnotfound.html")
	}

}

func createPost(c *gin.Context) {
	like := 0
	title := c.PostForm("title")
	summary := c.PostForm("summary")
	content := c.PostForm("content")
	tag := c.PostForm("tag")

	createpostData(title, summary, content, tag, like)
	if tmp, err := createNewPost(title, summary, content, tag, like); err == nil {
		render(c, gin.H{
			"title":   "Submission Successful",
			"payload": tmp}, "submission-successful.html")
	} else {
		//c.AbortWithStatus(http.StatusBadRequest)
		render(c, gin.H{
			"title": "Bad Request",
		}, "searchnotfound.html")
	}

}
