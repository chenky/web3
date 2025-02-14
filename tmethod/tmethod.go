package main

import "fmt"

type Slice []int

func (s Slice) Set(i int, v int) {
	s[i] = v
}

func (s Slice) Append(val int) {
	s = append(s, val)
}

func main() {
	s := make(Slice, 2)
	s.Set(0, 1)
	s.Append(2)
	fmt.Println(s)
}
