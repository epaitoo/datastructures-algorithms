package minStack;

import java.util.ArrayList;
import java.util.Stack;

public class MinStack {
    Stack<Integer> stack;
    Stack <Integer> secondStack;

    public MinStack() {
        stack = new Stack<>();
        secondStack = new Stack<>();
    }

    public void push(int val) {
        stack.push(val);

        if (secondStack.isEmpty()) {
            secondStack.push(val);
        } else {
            secondStack.push(Math.min(val, secondStack.peek()));
        }

    }

    public void pop() {
        if (stack.isEmpty()) {
            System.out.println("stack is empty");
        }

        stack.pop();
        secondStack.pop();

    }

    public int top() {
        return stack.peek();
    }

    public int getMin() {
        return secondStack.peek();
    }





    public static void main(String[] args) {
        MinStack minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);

        System.out.println(minStack.getMin()); // return -3
        minStack.pop();
        System.out.println(minStack.top());    // return 0
        System.out.println(minStack.getMin()); // return -2
    }
}
