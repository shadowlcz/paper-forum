package main

import (
	"github.com/gin-gonic/gin"
)

func showAnswerPage(c *gin.Context) {
	render(c, gin.H{
		"title": "answer",
	}, "comment.html")
}

/*func showCommentlist(c *gin.Context) {
	comment := getAllComment()
	render(c, gin.H{"title": "Comments", "payload": comment}, "comment.html")
}*/

/*func getComment(c *gin.Context) {

	if postID, err := strconv.Atoi(c.Param("post_id")); err == nil {

		if comment, err := getPostByID(postID); err == nil {
			render(c, gin.H{"title": post.Title, "payload": comment}, "comment.html")
		} else {
			c.AbortWithError(http.StatusNotFound, err)
		}

	} else {
		c.AbortWithStatus(http.StatusNotFound)
	}
}
*/
/*func createComment(c *gin.Context) {
	articleID := c.PostForm("postid")
	content := c.PostForm("content")

	createcommentData(articleID, content)

	if tmp, err := createNewComment(articleID, content); err == nil {
		render(c, gin.H{
			"title":   "Submission Successful",
			"payload": tmp}, "submission-successful.html")
	} else {
		c.AbortWithStatus(http.StatusBadRequest)
	}
}*/
