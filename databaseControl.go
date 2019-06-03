package main

import (
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

var wiki Wiki

type User struct {
	gorm.Model
	Username string `gorm:"unique_index"`
	Email    string `gorm:"type:varchar" json:"email"`
	Avatar   string
	Password string
	Role     int `gorm:"default:1"` // 0 admin 1 normal-user
}

type Post struct {
	gorm.Model
	Postid  int    `gorm:"type:integer;AUTO_INCREMENT" json:"postid"`
	Title   string `gorm:"type:varchar" json:"title"`
	Summary string `gorm:"type:varchar" json:"summary"`
	Content string `gorm:"type:varchar" json:"content"`
	Tags    string `gorm:"type:varchar" json:"tags"`
	Like    int    `gorm:"type:integer" json:"like"`
}

type Wiki struct {
	gorm.Model
	Wikiid  int    `gorm:"type:integer;AUTO_INCREMENT;primary_key" json:"wikiid"`
	Title   string `gorm:"type:varchar" json:"title"`
	Summary string `gorm:"type:varchar" json:"summary"`
	Content string `gorm:"type:varchar" json:"content"`
	Tags    string `gorm:"type:varchar" json:"tags"`
	Like    int    `gorm:"type:integer" json:"like"`
}

func postDatabase() {
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect database")
	}
	//defer db.Close()
	db.AutoMigrate(&Post{})

	var post0 Post
	var post Post
	var end int
	db.Last(&post0)
	end = int(post0.ID)
	for index := 1; index <= end; index++ {
		db.Table("posts").Where("postid = ?", index).Scan(&post)
		tmp := Post{Postid: len(postList) + 1, Title: post.Title, Summary: post.Summary, Content: post.Content, Tags: post.Tags}
		postList = append(postList, tmp)
	}
	fmt.Printf("%v", postList)
}

func wikiDatabase() {
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect databse")
	}
	db.AutoMigrate(&Wiki{})

	var wiki0 Wiki
	var end int
	db.Last(&wiki0)
	end = int(wiki0.ID)
	for index := 1; index <= end; index++ {
		db.Table("wikis").Where("wikiid = ?", index).Scan(&wiki)
		tmp := Wiki{Wikiid: len(wikiList) + 1, Title: wiki.Title, Summary: wiki.Summary, Content: wiki.Content, Tags: wiki.Tags}
		wikiList = append(wikiList, tmp)
	}
	fmt.Printf("%v", wikiList)
}

func userDatabase() {
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect databse")
	}
	//defer db.Close()
	db.AutoMigrate(&User{})
	var count int
	if err := db.Model(&User{}).Count(&count).Error; err == nil && count == 0 {

		db.Create(&User{Username: "admin",

			Email: "admin@gmail.com",

			Password: MD5("admin"),

			Avatar: "/static/images/info-img.png",

			Role: 0,
		})
	}
	var user User
	var user0 User
	var end int
	db.Last(&user0)
	end = int(user0.ID)
	for index := 1; index <= end; index++ {
		db.Table("users").Select("username,email,password").Where("id = ?", index).Scan(&user)
		tmp := User{Username: user.Username, Email: user.Email, Password: user.Password}
		userList = append(userList, tmp)
	}
}

func createpostData(title, summary, content, tags string, like int) (*Post, error) {
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect databse")
	}
	db.AutoMigrate(&Post{})
	var postTmp = Post{Postid: len(postList) + 1, Title: title, Summary: summary, Content: content, Tags: tags, Like: like}
	db.Create(&postTmp)
	fmt.Printf("%v", &postTmp)
	return &postTmp, nil
}

func createwikiData(title, summary, content, tags string) (*Wiki, error) {
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect databse")
	}
	db.AutoMigrate(&Wiki{})
	var wikiTmp = Wiki{Wikiid: len(wikiList) + 1, Title: title, Summary: summary, Content: content, Tags: tags}
	db.Create(&wikiTmp)
	fmt.Printf("%v", &wikiTmp)
	return &wikiTmp, nil
}

func createuserData(username, password, email string) (*User, error) {
	db, err := gorm.Open("sqlite3", "database/alpha.db")
	if err != nil {
		panic("failed to connect databse")
	}
	defer db.Close()
	db.AutoMigrate(&User{})

	var userTmp = User{Username: username, Password: password, Email: email}
	db.Create(&userTmp)
	fmt.Printf("%v", &userTmp)

	return &userTmp, nil
}
