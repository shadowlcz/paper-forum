// handlers.wiki.go

package main

import (
	"github.com/gin-gonic/gin"
	"strconv"
)

func showWikiPage(c *gin.Context) {
	wiki := getAllWiki()
	//"payload0": wiki
	render(c, gin.H{
		"title": "wiki", "payload": wiki}, "wiki.html")
}

func showWikiCreationPage(c *gin.Context) {
	render(c, gin.H{
		"title": "Create New Post"}, "create-wiki.html")
}

func getWiki(c *gin.Context) {

	if wikiID, err := strconv.Atoi(c.Param("wiki_id")); err == nil {

		if wiki, err := getWikiByID(wikiID); err == nil {

			render(c, gin.H{
				"title":   wiki.Title,
				"payload": wiki}, "wiki0.html")

		} else {
			//fmt.Println("0")
			//c.AbortWithError(http.StatusNotFound, err)
			render(c, gin.H{
				"title": "Not Found",
			}, "searchnotfound.html")
		}

	} else {
		//fmt.Println("1")
		//c.AbortWithStatus(http.StatusNotFound)
		render(c, gin.H{
			"title": "Not Found",
		}, "searchnotfound.html")

	}
}

func createWiki(c *gin.Context) {
	summary := c.PostForm("summary")
	title := c.PostForm("title")
	content := c.PostForm("content")
	tags := c.PostForm("tags")

	createwikiData(title, summary, content, tags)
	if tmp, err := createNewWiki(title, summary, content, tags); err == nil {
		render(c, gin.H{
			"title":   "Submission Successful",
			"payload": tmp}, "wikisubmission-successful.html")
	} else {
		//c.AbortWithStatus(http.StatusBadRequest)
		render(c, gin.H{
			"title": "Bad Request",
		}, "searchnotfound.html")

	}
}
