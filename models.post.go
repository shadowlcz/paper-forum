package main

import (
	"errors"
)

var postList = []Post{}

func getAllPosts() []Post {
	return postList
}

func getPostByID(id int) (*Post, error) {
	for _, tmp := range postList {
		if tmp.Postid == id {
			return &tmp, nil
		}
	}
	return nil, errors.New("No such post")
}

func createNewPost(title, summary, content, tag string, like int) (*Post, error) {

	tmp := Post{Postid: len(postList) + 1, Title: title, Summary: summary, Content: content, Tags: tag, Like: like}

	postList = append(postList, tmp)

	return &tmp, nil
}
