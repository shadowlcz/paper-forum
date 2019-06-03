package main

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
	//_ "github.com/mattn/go-sqlite3"
	"regexp"
)

func showSearchPage(c *gin.Context) {
	render(c, gin.H{
		"title": "Search",
	}, "search.html")
}

func searchButton(c *gin.Context) {
	searchKeyword := c.Query("search")
	fmt.Printf("%v", searchKeyword)
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect databse")
	}
	db.AutoMigrate(&Wiki{})

	var search0 Wiki
	var search Wiki
	db.Last(&search0)
	rows, err := db.Table("wikis").Where("tags = ?", searchKeyword).Rows() // (*sql.Rows, error)
	//defer rows.Close()
	match, _ := regexp.MatchString(search.Tags, searchKeyword)
	for rows.Next() {
		db.ScanRows(rows, &search)
		fmt.Printf("%v", "\n")
		fmt.Printf("%v", match)
		fmt.Printf("%v", "\n")
		if match {
			tmp := Wiki{Wikiid: search.Wikiid, Summary: search.Summary, Title: search.Title, Tags: search.Tags}
			searchList = append(searchList, tmp)
			fmt.Printf("%v", searchList)
		}
	}
	if len(searchList) <= 0 {
		render(c, gin.H{
			"title": "Search not found",
		}, "searchnotfound.html")
	} else {
		render(c, gin.H{
			"title": "Search",
		}, "search-processing.html")
	}
}

func showSearchlist(c *gin.Context) {
	search := getAllList()
	render(c, gin.H{"title": "Search Result List", "payload": search}, "searchlist.html")
	searchList = searchList[0:0]
}
