package main

import (
	"github.com/gin-gonic/gin"
	"math/rand"
	"net/http"
	"strconv"
)

func showLoginPage(c *gin.Context) {
	render(c, gin.H{
		"title": "Login",
	}, "login.html")
}

func performLogin(c *gin.Context) {

	username := c.PostForm("username")
	password := MD5(c.PostForm("password"))

	userDatabase()

	if isUserValid(username, password) {

		token := generateSessionToken()
		c.SetCookie("token", token, 3600, "", "", false, true)
		c.Set("is_logged_in", true)

		render(c, gin.H{
			"title": "Successful Login"}, "login-successful.html")

	} else {

		c.HTML(http.StatusBadRequest, "login.html", gin.H{
			"ErrorTitle":   "Login Failed",
			"ErrorMessage": "Invalid credentials provided"})
	}
}

func generateSessionToken() string {
	return strconv.FormatInt(rand.Int63(), 16)
}

func logout(c *gin.Context) {

	c.SetCookie("token", "", -1, "", "", false, true)

	c.Redirect(http.StatusTemporaryRedirect, "/")
}

func showRegistrationPage(c *gin.Context) {

	render(c, gin.H{
		"title": "Register"}, "register.html")
}

func Register(c *gin.Context) {

	username := c.PostForm("username")
	password := MD5(c.PostForm("password"))
	email := c.PostForm("email")
	if username != "" || password != "" || email != "" {
		createuserData(username, password, email)

	}

	if _, err := registerNewUser(username, password, email); err == nil {

		token := generateSessionToken()
		c.SetCookie("token", token, 3600, "", "", false, true)
		c.Set("is_logged_in", true)

		render(c, gin.H{
			"title": "Successful registration & Login"}, "login-successful.html")

	} else {

		c.HTML(http.StatusBadRequest, "register.html", gin.H{
			"ErrorTitle": "Registration Failed",
			//"ErrorMessage": err.checkErr()
		})

	}
}
