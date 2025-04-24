

```
Briefly explain the three different techniques used in linked list problems: lead-lag pointers, fast-slow points, linked list reversal.
```

Here’s a brief explanation of the three key techniques used in linked list problems:

### 1. **Lead-Lag (Two-Pointer) Technique**  
   - **Purpose**: Used to traverse the list with two pointers (e.g., "lead" and "lag") to maintain a fixed distance between them.  
   - **Example**: Finding the nth node from the end (lead moves `n` steps ahead first, then both move until lead reaches the end).  

### 2. **Fast-Slow (Tortoise-Hare) Technique**  
   - **Purpose**: Detect cycles or find the middle of the list. Fast pointer moves 2 steps, slow moves 1 step per iteration.  
   - **Example**:  
     - **Cycle detection**: If fast meets slow, a cycle exists.  
     - **Middle node**: When fast reaches the end, slow points to the middle.  

### 3. **Linked List Reversal**  
   - **Purpose**: Reverse the list (fully or partially) by changing node pointers iteratively or recursively.  
   - **Example**: Reversing a sublist (e.g., between nodes `m` and `n`) or solving problems like palindrome checks.  

Each technique optimizes traversal or manipulation without extra space (O(1) space complexity).

```
Using all three technique will lead to an optimal solution of this problem: Given a linked list L, determine if the linked list contains a palindrome. Solve this problem using the techniques.
```

To determine if a linked list is a palindrome, we can combine all three techniques (**fast-slow pointers**, **linked list reversal**, and **lead-lag comparison**) for an optimal O(n) time and O(1) space solution.  

### **Approach**  
1. **Find the middle** using **fast-slow pointers**.  
2. **Reverse the second half** of the list using **linked list reversal**.  
3. **Compare the first half** with the reversed second half using **lead-lag pointers**.  
4. (Optional) Restore the original list by reversing the second half again.  

### **Solution Code**  
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def isPalindrome(head: ListNode) -> bool:
    if not head or not head.next:
        return True
    
    # Step 1: Find the middle using fast-slow pointers
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    # Step 2: Reverse the second half
    prev = None
    curr = slow
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    
    # Step 3: Compare first half with reversed second half (lead-lag pointers)
    left = head
    right = prev
    while right:  # Only need to check the second half
        if left.val != right.val:
            return False
        left = left.next
        right = right.next
    
    return True
```

### **Explanation**  
1. **Fast-Slow Pointers**:  
   - `fast` moves twice as fast as `slow`, so when `fast` reaches the end, `slow` is at the middle.  
   - If the list has an odd length, `slow` is at the exact middle; if even, it's at the start of the second half.  

2. **Linked List Reversal**:  
   - We reverse the second half starting from `slow` (the middle node).  
   - This allows us to traverse the second half backward for comparison.  

3. **Lead-Lag Comparison**:  
   - `left` (head of the first half) and `right` (head of the reversed second half) are compared node by node.  
   - If all values match, the list is a palindrome.  

This approach efficiently checks palindromes **in O(n) time and O(1) space**, making it optimal.


```
What other techniques are used for linked list problems?
```

Linked list problems often rely on a variety of techniques beyond **lead-lag pointers**, **fast-slow pointers**, and **linked list reversal**. Here are some other key strategies:

---

### **1. Dummy Node Technique**  
   - **Purpose**: Simplifies edge cases (e.g., empty lists, head modifications).  
   - **How it works**:  
     - Create a dummy node that points to the head.  
     - Perform operations (insertions, deletions) without worrying about null head.  
     - Return `dummy.next` as the new head.  
   - **Example**:  
     - Merging two sorted lists.  
     - Removing duplicates.  

   **Code Snippet**:  
   ```python
   dummy = ListNode(-1)
   dummy.next = head
   # Perform operations (e.g., deletions)
   return dummy.next
   ```

---

### **2. Two-Pointer Variations**  
   - **Purpose**: Solve problems involving relative positioning or distance.  
   - **Variations**:  
     - **Fixed-distance pointers**: Maintain `n` nodes apart (e.g., remove Nth node from end).  
     - **Overlapping detection**: Find intersection points of two lists.  
   - **Example**:  
     - Finding the intersection node of two linked lists.  

---

### **3. Recursion**  
   - **Purpose**: Traverse or modify lists in reverse order (LIFO) or divide-and-conquer.  
   - **Use Cases**:  
     - Reverse a linked list recursively.  
     - Check palindrome (compare head and tail recursively).  
   - **Trade-off**: O(n) stack space.  

   **Code Snippet (Reverse Recursively)**:  
   ```python
   def reverseList(head):
       if not head or not head.next:
           return head
       new_head = reverseList(head.next)
       head.next.next = head
       head.next = None
       return new_head
   ```

---

### **4. Hash Map / Set Tracking**  
   - **Purpose**: Detect cycles or duplicates with O(1) lookups.  
   - **How it works**:  
     - Store visited nodes in a hash set.  
     - Check for revisits during traversal.  
   - **Example**:  
     - Detect cycle in a linked list (alternative to Floyd’s algorithm).  
     - Remove duplicates from an unsorted list.  

   **Code Snippet (Cycle Detection)**:  
   ```python
   visited = set()
   while head:
       if head in visited:
           return True  # Cycle detected
       visited.add(head)
       head = head.next
   return False
   ```

---

### **5. In-Place Reordering**  
   - **Purpose**: Modify list structure without extra space (e.g., zig-zag, odd-even separation).  
   - **Techniques**:  
     - Split, reverse, and merge sublists.  
     - Swap nodes in pairs.  
   - **Example**:  
     - Reorder list (L0 → Ln → L1 → Ln-1 → ...).  

   **Code Snippet (Reorder List)**:  
   ```python
   # Find middle, reverse second half, merge alternately
   slow, fast = head, head.next
   while fast and fast.next:
       slow = slow.next
       fast = fast.next.next
   second = slow.next
   slow.next = None
   # Reverse second half and merge
   ```

---

### **6. Sentinel Node for Deletion**  
   - **Purpose**: Simplify node deletion (e.g., remove all nodes with value `x`).  
   - **How it works**:  
     - Use a dummy node to handle head deletions uniformly.  
     - Traverse with a `prev` pointer to unlink nodes.  

   **Code Snippet (Remove All `val`)**:  
   ```python
   dummy = ListNode(0, head)
   prev, curr = dummy, head
   while curr:
       if curr.val == val:
           prev.next = curr.next
       else:
           prev = curr
       curr = curr.next
   return dummy.next
   ```

---

### **7. Length Calculation + Modular Arithmetic**  
   - **Purpose**: Solve problems requiring positional awareness (e.g., rotate list by `k`).  
   - **Steps**:  
     1. Compute list length.  
     2. Adjust `k` using `k % length` to avoid redundant rotations.  
     3. Use two pointers to find the new head/tail.  

   **Example**: Rotate a list right by `k` places.  

---

### **When to Use Which Technique?**  
| Problem Type                     | Recommended Technique                     |
|-----------------------------------|------------------------------------------|
| Cycle detection                   | Fast-slow pointers or hash set           |
| Reversal                          | Iterative/recursive reversal             |
| Nth node from end                 | Lead-lag pointers                        |
| Merging/splitting lists           | Dummy nodes + two pointers               |
| Palindrome check                  | Fast-slow + reversal + comparison        |
| In-place reordering               | Multiple passes (split/reverse/merge)    |
| Duplicate removal                 | Hash set or sorted traversal             |

These techniques cover most linked list problems efficiently, often with **O(n) time and O(1) space** (except recursion/hash sets). Combining them (e.g., dummy nodes + two pointers) is common in complex problems.