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

export const code9b = 
`#include <iostream>
using namespace std;

int main() {
    char greeting[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
    cout << "Greeting message: ";
    cout << greeting << endl;
    return 0;
}`

export const code10a = 
`#include <iostream>
using namespace std;

int max(int num1, int num2); // function declaration
int main()
{
    int a = 100 , b = 200 , ret; // local variable declaration:
    ret = max(a, b); // calling a function to get max value.
    cout << "Max value is : " << ret << endl;
    return 0;
}

int max(int num1, int num2) // function returning the max between two numbers
{
    int result; // local variable declaration
    if (num1 > num2) {
        result = num1;
    }
    else {
        result = num2;
    }
    return result;
}`

export const code10b = 
`#include <iostream>
using namespace std;

int add(int, int); // Function prototype(declaration)
int main() {
    int num1, num2, sum;
    cout << "Enters two numbers to add: ";
    cin >> num1 >> num2;
    sum = add(num1, num2); // Function call
    cout << "Sum = " << sum;
    return 0;
}
int add(int a, int b) { // Function defination
    int add;
    add = a + b;
    return add; // Return statement
}`

export const code11 = 
`#include <iostream>
#include <cstring>  // For strcpy
using namespace std;

class student {
private:
    char name[25];
    int roll;
    float height, weight;

public:
    student() {
        strcpy(name, "Ram");
        roll = 0;
        height = 0.0f;
        weight = 0.0f;
    }

    void display() {
        cout << "\\nName: " << name;
        cout << "\\nRoll no: " << roll;
        cout << "\\nHeight: " << height;
        cout << "\\nWeight: " << weight;
    }

    ~student() {
        cout << "\\nDestroying object";
    }
};

int main() {
    student obj;
    obj.display();  // Display object data
    cin.get();      // Pause the console
    return 0;
}`


export const code12 =
`#include <iostream>
using namespace std;

class Box {
private:
    double length;  // Length of a box
    double breadth; // Breadth of a box

public:
    void area();
};

void Box::area() {
    cout << "Enter the length & breadth: ";
    cin >> length >> breadth;
    cout << endl << "Result is: " << length * breadth;
}

int main() {
    Box Box1;  // Declare Box1 of type Box
    Box1.area();
    return 0;
}`

export const code13 =
`#include <iostream>
using namespace std;

class Complex {
    int a, b;

public:
    void getvalue() {
        cout << "Enter the values of Complex Number (a and b): ";
        cin >> a >> b;
    }

    Complex operator+(const Complex &ob) {
        Complex t;
        t.a = a + ob.a;
        t.b = b + ob.b;
        return t;
    }

    Complex operator-(const Complex &ob) {
        Complex t;
        t.a = a - ob.a;
        t.b = b - ob.b;
        return t;
    }

    void display() {
        cout << a << (b >= 0 ? "+" : "") << b << "i" << "\\n";
    }
};

int main() {
    Complex obj1, obj2, result_add, result_sub;

    obj1.getvalue();
    obj2.getvalue();

    result_add = obj1 + obj2;
    result_sub = obj1 - obj2;

    cout << "\\nInput Values:\\n";
    obj1.display();
    obj2.display();

    cout << "\\nAddition Result: ";
    result_add.display();

    cout << "Subtraction Result: ";
    result_sub.display();

    return 0;
}`

export const code14 =
`#include <iostream>
#include <cstdlib>  // For exit()

using namespace std;

class Fn {
public:
    void area(int);               // Circle
    void area(int, int);          // Rectangle
    void area(float, int, int);   // Triangle
};

// Area of Circle
void Fn::area(int a) {
    const float pi = 3.14;
    cout << "Area of Circle: " << pi * a * a << endl;
}

// Area of Rectangle
void Fn::area(int a, int b) {
    cout << "Area of Rectangle: " << a * b << endl;
}

// Area of Triangle
void Fn::area(float t, int a, int b) {
    cout << "Area of Triangle: " << t * a * b << endl;
}

int main() {
    int ch, a, b, r;
    Fn obj;

    do {
        cout << "\\n\\t\\tFunction Overloading";
        cout << "\\n1. Area of Circle";
        cout << "\\n2. Area of Rectangle";
        cout << "\\n3. Area of Triangle";
        cout << "\\n4. Exit";
        cout << "\\nEnter your Choice: ";
        cin >> ch;

        switch (ch) {
            case 1:
                cout << "Enter Radius of the Circle: ";
                cin >> r;
                obj.area(r);
                break;

            case 2:
                cout << "Enter Sides of the Rectangle (length and breadth): ";
                cin >> a >> b;
                obj.area(a, b);
                break;

            case 3:
                cout << "Enter Base and Height of the Triangle: ";
                cin >> a >> b;
                obj.area(0.5f, a, b);
                break;

            case 4:
                cout << "Exiting the program.\\n";
                exit(0);

            default:
                cout << "Invalid choice! Please select a valid option.\\n";
        }
    } while (ch != 4);

    return 0;
}`

export const code15 =
`#include <iostream>
#include <string>

using namespace std;

class Emp
{
public:
    int eno;
    string name, des;

    void get()  {
        cout << "Enter the employee number: ";
        cin >> eno;
        cin.ignore();

        cout << "Enter the employee name: ";
        getline(cin, name);

        cout << "Enter the designation: ";
        getline(cin, des);
    }
};

class Salary : public Emp
{
    float bp, hra, da, pf, np;

public:
    void get1()
    {
        cout << "Enter the Basic Pay: ";
        cin >> bp;

        cout << "Enter the House Rent Allowance: ";
        cin >> hra;

        cout << "Enter the Dearness Allowance: ";
        cin >> da;

        cout << "Enter the Provident Fund: ";
        cin >> pf;
    }

    void calculate()
    {
        np = bp + hra + da - pf;
    }

    void display()
    {
        cout << eno << "\\t" << name << "\\t" << des << "\\t"
             << bp << "\\t" << hra << "\\t" << da << "\\t"
             << pf << "\\t" << np << endl;
    }
};

int main()
{
    int n;

    cout << "Enter the number of employees: ";
    cin >> n;

    Salary s[10]; // Assuming max 10 employees

    for (int i = 0; i < n; i++)
    {
        cout << "\\nEntering details for Employee " << i + 1 << ":\\n";
        s[i].get();
        s[i].get1();
        s[i].calculate();
    }

    cout << "\\nEmp No\\tName\\tDesignation\\tBP\\tHRA\\tDA\\tPF\\tNet Pay\\n";
    cout << "-----------------------------------------------------------------\\n";

    for (int i = 0; i < n; i++)
    {
        s[i].display();
    }

    return 0;
}`

export const code16 =
`#include <iostream>
using namespace std;

#define MAX 1000

class Stack
{
    int top;

public:
    int a[MAX]; // Maximum size of Stack

    Stack() { top = -1; }
    bool push(int x);
    int pop();
    bool isEmpty();
};

bool Stack::push(int x)
{
    if (top >= (MAX - 1))
    {
        cout << "Stack Overflow\\n";
        return false;
    }
    else
    {
        a[++top] = x;
        cout << x << " pushed into stack\\n";
        return true;
    }
}

int Stack::pop()
{
    if (top < 0)
    {
        cout << "Stack Underflow\\n";
        return 0;
    }
    else
    {
        int x = a[top--];
        return x;
    }
}

bool Stack::isEmpty()
{
    return (top < 0);
}

int main()
{
    Stack s;

    s.push(10);
    s.push(20);
    s.push(30);

    cout << s.pop() << " popped from stack\\n";

    return 0;
}`

export const code17 =
`#include <stdio.h>
#include <stdlib.h>

#define MAX 50
int queue_array[MAX];
int rear = -1;
int front = -1;

void insert();
void delete_item();
void display();

int main()
{
    int choice;
    while (1)
    {
        printf("1. Insert element to queue\\n");
        printf("2. Delete element from queue\\n");
        printf("3. Display all elements of queue\\n");
        printf("4. Quit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            insert();
            break;
        case 2:
            delete_item();
            break;
        case 3:
            display();
            break;
        case 4:
            exit(0);
        default:
            printf("Wrong choice\\n");
        }
    }
}

void insert()
{
    int add_item;
    if (rear == MAX - 1)
    {
        printf("Queue Overflow\\n");
    }
    else
    {
        if (front == -1) {
            front = 0; // If queue is initially empty
        }
        
        printf("Insert the element in queue: ");
        scanf("%d", &add_item);
        rear = rear + 1;
        queue_array[rear] = add_item;
    }
}

void delete_item()
{
    if (front == -1 || front > rear)
    {
        printf("Queue Underflow\\n");
        return;
    }
    else
    {
        printf("Element deleted from queue is: %d\\n", queue_array[front]);
        front = front + 1;
    }
}

void display()
{
    int i;
    if (front == -1)
    {
        printf("Queue is empty\\n");
    }
    else
    {
        printf("Queue is:\\n");
        for (i = front; i <= rear; i++)
            printf("%d ", queue_array[i]);
        printf("\\n");
    }
}`

export const code18 =
`#include <bits/stdc++.h>
using namespace std;

// A linked list Node
struct Node
{
    int data;
    struct Node *next;
};

// Size of linked list
int listSize = 0; // Renamed from 'size' to 'listSize'

// Function to create and return a Node
Node *getNode(int data)
{
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a node at a given position
void insertPos(Node **current, int pos, int data)
{
    if (pos < 1 || pos > listSize + 1)
    {
        cout << "Invalid position!" << endl;
        return;
    }

    Node *temp = getNode(data);

    // Insertion at the head
    if (pos == 1)
    {
        temp->next = *current;
        *current = temp;
    }
    else
    {
        Node *prev = *current;
        for (int i = 1; i < pos - 1; i++)
        {
            prev = prev->next;
        }
        temp->next = prev->next;
        prev->next = temp;
    }
    listSize++; // Increment the size after insertion
}

// Function to print the linked list
void printList(Node *head)
{
    while (head != NULL)
    {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

// Main function
int main()
{
    // Creating the list 3->5->8->10
    Node *head = NULL;
    head = getNode(3);
    head->next = getNode(5);
    head->next->next = getNode(8);
    head->next->next->next = getNode(10);

    listSize = 4; // Initialize the size

    cout << "Linked list before insertion: ";
    printList(head);

    // Insertion at position 3
    int data = 12, pos = 3;
    insertPos(&head, pos, data);
    cout << "Linked list after insertion of 12 at position 3: ";
    printList(head);

    // Insertion at the front
    data = 1, pos = 1;
    insertPos(&head, pos, data);
    cout << "Linked list after insertion of 1 at position 1: ";
    printList(head);

    // Insertion at the end
    data = 15, pos = 7;
    insertPos(&head, pos, data);
    cout << "Linked list after insertion of 15 at position 7: ";
    printList(head);

    return 0;
}`

export const code19 =
`#include <iostream>
using namespace std;

class base
{
public:
    virtual void show()
    {
        cout << "\\nBase class show:";
    }
    void display()
    {
        cout << "\\nBase class display:";
    }
};

class drive : public base
{ // 'drive' retained as per your original code
public:
    void display()
    {
        cout << "\\nDrive class display:";
    }
    void show() override
    {
        cout << "\\nDrive class show:";
    }
};

int main()
{
    base obj1;
    base *p;

    cout << "\\n\\tP points to base:\\n";
    p = &obj1;
    p->display(); // Calls base::display()
    p->show();    // Calls base::show()

    cout << "\\n\\n\\tP points to drive:\\n";
    drive obj2;
    p = &obj2;
    p->display(); // Calls base::display() (non-virtual)
    p->show();    // Calls drive::show() (virtual)

    return 0;
}`

export const code20 =
`#include <iostream>
using namespace std;

class base {
    int val1, val2;

public:
    void get() {
        cout << "Enter two values: ";
        cin >> val1 >> val2;
    }

    friend float mean(base ob); // Friend function declaration
};

float mean(base ob) {
    return float(ob.val1 + ob.val2) / 2;
}

int main() {
    base obj;
    obj.get();
    cout << "Mean value is: " << mean(obj) << endl; // Fixed output formatting
    return 0;
}
`