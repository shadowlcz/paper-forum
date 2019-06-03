package main

import (
	"errors"
	_ "github.com/jinzhu/gorm"
	"strings"
)

var userList = []User{
	//User{Username: "admin", Password: "admin"},
}

func isUserValid(username, password string) bool {
	for _, u := range userList {
		if u.Username == username && u.Password == password {
			return true
		}
	}
	return false
}

func registerNewUser(username, password, email string) (*User, error) {

	if strings.TrimSpace(password) == "" {
		return nil, errors.New("The password can't be empty")
	} else if !isUsernameAvailable(username) {
		return nil, errors.New("The username isn't available")
	}

	u := User{Username: username, Password: password, Email: email, Role: 1}

	userList = append(userList, u)

	//fmt.Print("%v", userList)
	return &u, nil
}

func isUsernameAvailable(username string) bool {
	for _, u := range userList {
		if u.Username == username {
			return false
		}
	}
	return true
}
