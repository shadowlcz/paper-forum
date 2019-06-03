package main

import (
	"crypto/md5"
	"fmt"
)

//md crypt for password
func MD5(str string) string {
	md5str := fmt.Sprintf("%x", md5.Sum([]byte(str)))
	return md5str
}

func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}
