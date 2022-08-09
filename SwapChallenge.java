package com.newsletter;

//   08/08/2022

/* Given a list, swap every two adjacent nodes.
Something to think about: How would your code change if this were a linked list, versus an array?
Example:
> swapPairs([1,2,3,4])
> [2,1,4,3]

> swapPairs([])
> []
 */

import java.util.*;

public class SwapChallenge {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        int[] swapped = swapPairs(arr);
        System.out.println(Arrays.toString(swapped)); //  [2,1,4,3]

        List<Integer> integerList = new LinkedList<>(Arrays.asList(1, 2, 3, 4));
        swapPairs(integerList);
        for (Integer i : integerList) {
            System.out.println("i= " + i);
        }
    }

    public static int[] swapPairs(int[] arr) {
        //make a copy of the passed arr into the swapped one
        int[] swapped = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            swapped[i] = arr[i];
        }
        for (int i = 0; i < arr.length - 1; i += 2) {
            int temp = swapped[i];
            swapped[i] = swapped[i + 1];
            swapped[i + 1] = temp;
        }
        return swapped;
    }

    public static void swapPairs(List<Integer> list) {
        for (int i = 0; i < list.size() - 1; i += 2) {
            for (int j = i + 1; j % 2 != 0; j++) {
                Collections.swap(list, i, j);
            }
        }
    }

}
