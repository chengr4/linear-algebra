package main

import (
	"fmt"
	"gonum.org/v1/gonum/mat"
	"math/rand"
)

func matPrint(X mat.Matrix) {
	fa := mat.Formatted(X, mat.Prefix(""), mat.Squeeze())
	fmt.Printf("%v\n", fa)
}

func main() {
	// Generate a 6×6 matrix of random values.
	data := make([]float64, 36)
	for i := range data {
		data[i] = rand.NormFloat64()
	}
	a := mat.NewDense(6, 6, data)
	tr := mat.Trace(a)
	fmt.Println(tr)

}
