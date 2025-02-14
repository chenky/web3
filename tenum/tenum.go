package main

import (
	"fmt"
)

// 定义一个常量组，用于表示枚举
type Fruit int

const (
	Apple  Fruit = iota // 0
	Banana              // 1
	Cherry              // 2
)

// String 方法用于实现 fmt.Stringer 接口，便于打印枚举值
func (f Fruit) String() string {
	return [...]string{"Apple", "Banana", "Cherry"}[f]
}

func main() {
	var myFruit Fruit = Banana

	fmt.Println("My favorite fruit is:", myFruit)
	fmt.Println("Fruit value as integer:", int(myFruit), Fruit(2))
}
