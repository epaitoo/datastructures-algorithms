package baseballGame;

import java.util.ArrayList;

//Question
//https://leetcode.com/problems/baseball-game/

public class BaseballGame {
    public static void main(String[] args) {
        String[] operations = {"5","-2","4","C","D","9","+","+"};
        int result = calPoints(operations);
        System.out.println(result);
    }

    public static int calPoints(String[] operations) {
        int output = 0;
        ArrayList<Integer> list = new ArrayList<>();
        for(String operation : operations) {

            switch (operation) {
                case "+" -> {
                    int prevScore = list.get(list.size() - 1);
                    int index = (list.size() - 1) - 1;
                    int result = list.get(index) + prevScore;
                    list.add(result);
                }
                case "D" -> list.add(2 * list.get(list.size() - 1));
                case "C" -> list.remove(list.size() - 1);
                default -> list.add(Integer.parseInt(operation));
            }
        }

        for (Integer value: list) {
            output += value;
        }


        return output;
    }
}
