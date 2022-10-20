// Question Link: https://leetcode.com/problems/valid-parentheses/submissions/826631136/

package validParentheses;

import java.util.Stack;

public class ValidParenthesis {
    public static void main(String[] args) {
        String s = "([])";
        System.out.println(isValid(s));
    }

    public static boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();

        for (int i=0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(')');
            } else if (s.charAt(i) == '[') {
                stack.push(']');
            } else if (s.charAt(i) == '{') {
                stack.push('}');
            } else if (stack.empty() || stack.pop() != s.charAt(i)) {
                return false;
            }
        }

        return stack.empty();

    }
}
