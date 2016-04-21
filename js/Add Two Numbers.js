/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
// function HandleChain(list1, list2, carry) {
//   if (list == null && list2 == null &&!carry) {
//     return null;
//   }
//   var val = (list1 ? list1.val : 0) + (list2 ? list2.val : 0) + carry,
//     carry = 0;
//   if (val >= 10) {
//     val -= 10;
//     carry = 1;
//   }
//   var list = new ListNode(val);
//   list.next = HandleChain((list1 ? list1.next : null), (list2 ? list2.next : null), carry);
//   return list;
// }
  var carry = 0,
    val = l1.val + l2.val,
    list1 = l1.next,
    list2 = l2.next;
  if (val >= 10) {
    val -= 10;
    carry = 1;
  }
  var l3 = new ListNode(val),
    node = l3;
  while (list1!==null|| list2!==null ||carry) {
    val = (list1 ? list1.val : 0) + (list2 ? list2.val : 0) + carry;
    carry=0;
    if (val >= 10) {
      carry = 1;
      val -= 10;
    }
    node.next = new ListNode(val);
    node = node.next;
    list1 = list1?list1.next : null;
    list2 = list2?list2.next : null;
  }

  return l3;
};