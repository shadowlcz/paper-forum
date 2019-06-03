package main

import (
	"errors"
)

var wikiList = []Wiki{}

func getAllWiki() []Wiki {
	return wikiList
}

func getWikiByID(id int) (*Wiki, error) {
	for _, tmp := range wikiList {
		if tmp.Wikiid == id {
			return &tmp, nil
		}
	}
	return nil, errors.New("Item not found")
}

func createNewWiki(title, summary, content, tag string) (*Wiki, error) {
	//
	tmp := Wiki{Wikiid: len(wikiList) + 1, Title: title, Summary: summary, Content: content, Tags: tag}

	wikiList = append(wikiList, tmp)

	return &tmp, nil
}
