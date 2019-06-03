package main

import (
	_ "github.com/gin-gonic/gin"
)

func initializeRoutes() {

	router.Use(setUserStatus())

	router.GET("/", showIndexPage)

	// Group user related routes together
	userRoutes := router.Group("/u")
	{

		userRoutes.GET("/login", ensureNotLoggedIn(), showLoginPage)
		userRoutes.POST("/login", ensureNotLoggedIn(), performLogin)

		userRoutes.GET("/logout", ensureLoggedIn(), logout)

		userRoutes.GET("/register", ensureNotLoggedIn(), showRegistrationPage)
		userRoutes.POST("/register", ensureNotLoggedIn(), Register)
	}

	postRoutes := router.Group("/post")
	{
		postRoutes.GET("/", showPostlist)
		postRoutes.GET("/view/:post_id", getPost)

		postRoutes.GET("/create", ensureLoggedIn(), showPostCreationPage)
		postRoutes.POST("/create", ensureLoggedIn(), createPost)

		//postRoutes.GET("/answer", showAnswerPage)
		//postRoutes.POST("/answer", createAnswer)

		//postRoutes.POST("/answer/create", createComment)

	}

	wikiRoutes := router.Group("/wiki")
	{
		wikiRoutes.GET("/", showWikiPage)
		wikiRoutes.GET("/view/:wiki_id", getWiki)

		wikiRoutes.GET("/create", ensureLoggedIn(), showWikiCreationPage)
		wikiRoutes.POST("/create", ensureLoggedIn(), createWiki)

	}

	searchRoutes := router.Group("/search")
	{
		searchRoutes.GET("/", showSearchPage)
		searchRoutes.GET("/result", searchButton)
		searchRoutes.GET("/list", showSearchlist)
	}
}
