package main

import (
	"github.com/gin-gonic/gin"
)

var router *gin.Engine

func main() {
	//http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	postDatabase()
	wikiDatabase()
	userDatabase()

	router = gin.Default()

	router.LoadHTMLGlob("./html/*") //process template
	//router.Static("/static", "./static")
	router.Static("/assets", "./assets")
	initializeRoutes()

	router.Run(":1080")
}
