package main

type Search struct {
	Title   string
	Summary string
}

var searchList = []Wiki{}

func getAllList() []Wiki {
	return searchList
}
