package com.newsletter;

//       25/07/2022
/*
Given two arrays A and B, return the indices at which the two arrays intersect.
If the two arrays have no intersection at all, return null.
Extra credit: how would you change your code if they were linked lists instead of arrays,
if the input were the two head nodes, and you returned the intersection node?
(see https://i.imgur.com/UyglRcN.png if it helps you visualize it)
Example: 
let listA = [1,4,5,6]
let listB = [2,3,4,5,6]
 findIntersection(listA, listB)
 [1, 2]
*/

import java.util.Arrays;

public class IntersectionChallenge {

    public static void main(String[] args) {

        int[] listA = {1, 4, 5, 6};
        int[] listB = {2, 3, 4, 5, 6};

        System.out.println("The intersection indices for the arrays is " + Arrays.toString(findIntersection(listA, listB)));

        System.out.println("**********");

        //1st LinkedList
        ListNode head1 = new ListNode(1);
        head1.next = new ListNode(4);
        head1.next.next = new ListNode(5);
        head1.next.next.next = new ListNode(6);

        //2nd LinkedList
        ListNode head2 = new ListNode(2);
        head2.next = new ListNode(3);
        head2.next.next = new ListNode(4);
        head2.next.next.next = new ListNode(5);
        head2.next.next.next.next = new ListNode(6);

        ListNode intersectionNode = findIntersection(head1, head2);
        System.out.println("The intersection node for the linked lists has a value " + intersectionNode.getVal());
    }

    public static int[] findIntersection(int[] arr1, int[] arr2) {
        int[] result = new int[2];

        for (int i = 0; i < arr1.length; i++) {
            for (int j = 0; j < arr2.length; j++) {

                if (arr1[i] == arr2[j]) {
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return null;
    }

    public static class ListNode {
        int val;
        ListNode next;

        public ListNode(int val) {
            this.val = val;
            this.next = null;
        }

        public int getVal() {
            return val;
        }
    }

    public static ListNode findIntersection(ListNode head1, ListNode head2) {
        while (head2 != null) {
            ListNode temp = head1;
            while (temp != null) {
                if (temp.getVal() == head2.getVal()) {
                    return head2;
                }
                temp = temp.next;
            }
            head2 = head2.next;
        }
        return null;
    }

}
