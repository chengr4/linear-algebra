# Solving Linear Equation

## Identity Matrix 單位矩陣

I = identity matrix (單位矩陣)

```
n = 5
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0
0 0 0 0 1
```
- For any n*n matrix A `AI = IA = A`

## Inverse Matrix 反矩陣

Definition: An n*n matrix `A` is **invertable**, if there exists a matrix `B` such that `BA=I && AB=I` => `B` is an **inverse** of `A`

### Atributes

- If `A` and `B` are invertable, then so is `AB`
    - `(AB)^-1 = B^-1 * A^-1`
    - `(ABC)^-1 = C^-1 * B^-1 * A^-1`

## Diagonal Matrix

```
n = 5
dx should not be 0

d1 0 0 0 0
0 d2 0 0 0
0 0 d3 0 0
0 0 0 d4 0
0 0 0 0 d5
```

Inverse Matrix of Diagonal Matrix

```
1/d1 0
0 1/d2
```