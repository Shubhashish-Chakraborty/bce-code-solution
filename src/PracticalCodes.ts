export const code8 = 
`#include <iostream>
using namespace std;

int main() {
    int a = 21 , b = 10 , c;
    
    c = a + b;
    cout << "a + b : Value of c is : " << c << endl;
    
    c = a - b;
    cout << "a - b : Value of c is : " << c << endl;
    
    c = a * b;
    cout << "a X b : Value of c is : " << c << endl;
    
    c = a / b;
    cout << "a / b : Value of c is : " << c << endl;
    
    c = a % b;
    cout << "a % b : Value of c is : " << c << endl;
    
    return 0;
}
`

export const code9a = 
`#include <stdio.h>

int main() {
    int values[5];
    printf("Enter 5 integers: ");
 
    // taking input and storing it in an array
    for(int i = 0; i < 5; ++i) {
        scanf("%d", &values[i]);
    }
    printf("Displaying integers: \\n");
 
    // printing elements of an array
    for(int i = 0; i < 5; ++i) {
        printf("%d\\n", values[i]);
    }
    return 0;

}`