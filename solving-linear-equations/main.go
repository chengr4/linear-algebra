package main

import (
	"fmt"
	"gonum.org/v1/gonum/mat"
	"log"
)

func matPrint(X mat.Matrix) {
	fa := mat.Formatted(X, mat.Prefix(""), mat.Squeeze())
	fmt.Printf("%v\n", fa)
}

func main() {
	// Elimation matrix
	E21 := mat.NewDense(3, 3, []float64{
		1, 0, 0,
		-4, 1, 0,
		0, 0, 1,
	})
	matPrint(E21)
	// Compute the inverse of A.
	var E21Inv mat.Dense
	err := E21Inv.Inverse(E21)
	if err != nil {
		log.Fatalf("A is not invertible: %v", err)
	}
	matPrint(&E21Inv)
	/*
		⎡1  0  -0⎤
		⎢4  1  -0⎥
		⎣0  0   1⎦
	*/
}
