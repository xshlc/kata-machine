
```
Suppose we have elements A, B, D, F in a singly linked list and we want to insert C in between B and D. What would the pseudocode look like? Now suppose same elements but it's a doubly linked list. What would the pseudocode look like? Compare the two.
```

### **Inserting "C" Between "B" and "D" in a Singly Linked List vs. Doubly Linked List**  

#### **Given List Structure (Initial State)**
- **Singly Linked List**: `A → B → D → F`  
- **Doubly Linked List**: `A ⇄ B ⇄ D ⇄ F`  

We want to insert **C** between **B** and **D**.

---

### **1. Singly Linked List Pseudocode**
In a **singly linked list**, each node has:
- `data` (e.g., "A", "B", etc.)
- `next` (pointer to the next node)

#### **Steps to Insert "C":**
1. Traverse the list to find **B** (since we don’t have backward links).
2. Create a new node **C**.
3. Set **C.next** to **D** (the node after **B**).
4. Update **B.next** to point to **C**.

#### **Pseudocode:**
```plaintext
function insertAfter(B, newData):
    newNode = new Node(newData)   // Create node C
    newNode.next = B.next         // C → D
    B.next = newNode              // B → C
```
#### **Final List:**  
`A → B → C → D → F`

---

### **2. Doubly Linked List Pseudocode**
In a **doubly linked list**, each node has:
- `data` (e.g., "A", "B", etc.)
- `next` (pointer to next node)
- `prev` (pointer to previous node)

#### **Steps to Insert "C":**
1. Find **B** (traverse forward or backward, but usually forward).
2. Create a new node **C**.
3. Set **C.next** to **D** (same as singly linked list).
4. Set **C.prev** to **B** (new backward link).
5. Update **D.prev** to point back to **C** (since **D**’s previous was **B**).
6. Update **B.next** to point to **C**.

#### **Pseudocode:**
```plaintext
function insertAfter(B, newData):
    newNode = new Node(newData)   // Create node C
    newNode.next = B.next         // C → D
    newNode.prev = B             // B ← C
    B.next.prev = newNode        // D.prev = C (was B)
    B.next = newNode             // B → C
```
#### **Final List:**  
`A ⇄ B ⇄ C ⇄ D ⇄ F`

---

### **Comparison: Singly vs. Doubly Linked List Insertion**
| **Aspect**               | **Singly Linked List** | **Doubly Linked List** |
|--------------------------|----------------------|----------------------|
| **Traversal Direction**  | Forward only (`next`) | Forward & backward (`next`, `prev`) |
| **Insertion Steps**      | 1. Update `B.next` → `C`<br>2. Set `C.next` → `D` | 1. Update `B.next` → `C`<br>2. Set `C.prev` → `B`<br>3. Update `D.prev` → `C` |
| **Time Complexity**      | O(n) (must traverse to find **B**) | O(n) (same, unless we already have **B**) |
| **Space Overhead**       | Lower (no `prev` pointer) | Higher (extra `prev` pointer per node) |
| **Ease of Insertion**    | Simpler (only `next` updates) | More complex (must maintain `prev` links) |

### **Key Takeaways**
- **Singly Linked List**: Simpler insertion (only forward links), but requires traversal to find the insertion point.
- **Doubly Linked List**: More flexible (can traverse both ways), but insertion requires updating both `next` and `prev` pointers.
- **Performance**: Both are O(n) for arbitrary insertion, but doubly linked lists allow O(1) deletions if the node is known (since we have `prev`).

Would you like an optimized version (e.g., using a tail pointer or sentinel nodes)?

```
Alternative methods
```

### **Alternative Approaches for Insertion in Singly & Doubly Linked Lists**  

We can optimize insertion in both **singly** and **doubly** linked lists by:  
1. **Using a tail pointer** (for O(1) appends).  
2. **Using a sentinel/dummy node** (to avoid edge cases).  
3. **Maintaining a reference to the predecessor** (if possible).  

Let’s compare these alternatives to the original approach.

---

## **1. Singly Linked List (Optimized Approaches)**
### **Original Approach (Traversal-Based)**
```plaintext
function insertAfter(B, newData):
    newNode = Node(newData)  // C
    newNode.next = B.next    // C → D
    B.next = newNode         // B → C
```
✅ Simple, but requires O(n) traversal to find **B**.

---

### **Alternative 1: Using a Predecessor Reference (If Available)**
If we already have a reference to **B**, insertion is **O(1)**.  
*(This is the same as the original but assumes we don’t need traversal.)*

```plaintext
function insertAfter(B, newData):  // B is known
    newNode = Node(newData)        // C
    newNode.next = B.next          // C → D
    B.next = newNode               // B → C
```
✅ **O(1)** if **B** is pre-known (e.g., in a hash map or cached pointer).  

---

### **Alternative 2: Using a Sentinel Node (Dummy Head)**
A **sentinel node** (dummy head) avoids edge cases (e.g., inserting at the head).  

```plaintext
function insertAfter(sentinel, targetData, newData):
    current = sentinel.next
    while current.data != targetData:
        current = current.next
    newNode = Node(newData)    // C
    newNode.next = current.next
    current.next = newNode
```
✅ Simplifies edge-case handling (e.g., empty list).  
❌ Still **O(n)** for arbitrary insertion.

---

### **Alternative 3: Using a Tail Pointer (For Append Operations)**
If we always insert at the end, a **tail pointer** makes appends **O(1)**.  

```plaintext
function append(tail, newData):
    newNode = Node(newData)    // New node
    tail.next = newNode        // Link to new node
    tail = newNode             // Update tail
```
✅ **O(1)** for appends.  
❌ Doesn’t help for arbitrary insertions (like **B → C**).

---

## **2. Doubly Linked List (Optimized Approaches)**
### **Original Approach (Traversal-Based)**
```plaintext
function insertAfter(B, newData):
    newNode = Node(newData)  // C
    newNode.next = B.next    // C → D
    newNode.prev = B         // B ← C
    B.next.prev = newNode    // D.prev = C
    B.next = newNode         // B → C
```
✅ Works, but requires traversal to find **B** (O(n)).

---

### **Alternative 1: Using Predecessor Reference (O(1) If Known)**
If we already have **B**, insertion is **O(1)** (same as original but avoids traversal).  

```plaintext
function insertAfter(B, newData):  // B is known
    newNode = Node(newData)        // C
    newNode.next = B.next          // C → D
    newNode.prev = B               // B ← C
    B.next.prev = newNode          // D.prev = C
    B.next = newNode               // B → C
```
✅ **O(1)** if **B** is cached (e.g., in a hash table).  

---

### **Alternative 2: Using Sentinel Nodes (Dummy Head & Tail)**
A **doubly linked list with sentinels** avoids edge cases (e.g., empty list, head/tail ops).  

```plaintext
function insertAfter(sentinel, targetData, newData):
    current = sentinel.next
    while current.data != targetData:
        current = current.next
    newNode = Node(newData)    // C
    newNode.next = current.next
    newNode.prev = current
    current.next.prev = newNode
    current.next = newNode
```
✅ Simplifies edge cases (e.g., inserting at head/tail).  
❌ Still **O(n)** for arbitrary insertion.  

---

### **Alternative 3: Using Hash Map for O(1) Lookup**
If we store node references in a **hash map**, we can find **B** in **O(1)** time.  

```plaintext
hashMap = { "A": nodeA, "B": nodeB, "D": nodeD, "F": nodeF }

function insertAfter(hashMap, targetKey, newKey, newData):
    targetNode = hashMap[targetKey]  // O(1) lookup for B
    newNode = Node(newData)          // C
    newNode.next = targetNode.next   // C → D
    newNode.prev = targetNode        // B ← C
    targetNode.next.prev = newNode   // D.prev = C
    targetNode.next = newNode        // B → C
    hashMap[newKey] = newNode        // Update hash map
```
✅ **O(1) insertion** if the predecessor is known (via hash map).  
❌ Extra **O(n) space** for the hash map.  

---

## **Final Comparison: Singly vs. Doubly Linked List (Optimized)**
| **Approach**               | **Singly Linked List** | **Doubly Linked List** |
|----------------------------|----------------------|----------------------|
| **Basic Insertion (Traversal)** | O(n) | O(n) |
| **Insertion with Pre-Known Node** | O(1) | O(1) |
| **Using Sentinel Node** | ✅ (Simplifies edge cases) | ✅ (Works for head/tail ops) |
| **Using Tail Pointer** | ✅ (O(1) appends) | ✅ (O(1) appends) |
| **Using Hash Map for Lookup** | ❌ (No backward link) | ✅ (O(1) insertion if node known) |
| **Space Overhead** | Lower (just `next`) | Higher (`next` + `prev`) |
| **Best For** | Simple forward-only ops | Bidirectional traversal, fast deletions |

### **When to Use Which?**
- **Singly Linked List:**  
  - When memory is tight (no `prev` overhead).  
  - When only forward traversal is needed (e.g., queues).  
- **Doubly Linked List:**  
  - When frequent insertions/deletions happen in the middle.  
  - When backward traversal is useful (e.g., undo/redo operations).  
  - When O(1) deletions are needed (if node is known).  

Would you like a real-world example (e.g., browser history vs. task scheduling)?

## Real-world applications 

Here are a few **real-world examples** comparing singly vs. doubly linked lists:

### **Singly Linked List Use Cases**  
1. **Task Scheduling (OS)**  
   - Used in **ready queues** where tasks are processed in FIFO order (no need for backward traversal).  
   - Example: Linux’s `task_struct` for process scheduling.  

2. **Undo Operations (Single-Level)**  
   - Some text editors use a singly linked list for **single-level undo** (only "last action" stored).  

3. **Hash Table Chaining**  
   - Collisions in hash tables often use singly linked lists (traverse forward only).  

4. **Forward-Only Navigation**  
   - Music player playlists (if "previous track" isn’t needed).  

---

### **Doubly Linked List Use Cases**  
1. **Browser History**  
   - Back/forward buttons require bidirectional traversal (Chrome/Firefox use doubly linked lists).  

2. **Advanced Undo/Redo**  
   - Applications like Photoshop use doubly linked lists for **multi-level undo/redo**.  

3. **LRU Cache Eviction**  
   - Combines a hash map + doubly linked list for O(1) insert/delete (used in Redis, databases).  

4. **Navigation Systems**  
   - GPS apps that need "previous step" and "next step" (e.g., Google Maps turn-by-turn).  

---

### **Key Takeaway**  
- **Use Singly Linked** when you only move forward (queues, caches with FIFO).  
- **Use Doubly Linked** when bidirectional ops are critical (undo, history, LRU caches).  


# check my work

```
A B D F
Insert C in between B and D

Check my work for singly linked list.
tmp = B.next
B.next = C
C.next = D

Check my work for doubly linked list.
C.next = D
B.next = C
D.prev = C
C.prev = B

Did I lose reference to any nodes? Did I correctly swap?
```

Your pseudocode for both **singly** and **doubly** linked lists is **almost correct**, but there's a critical issue in the **singly linked list** version. Let's verify both:

---

### **1. Singly Linked List Check**
#### **Your Code:**
```plaintext
tmp = B.next  // tmp = D
B.next = C    // B → C
C.next = D    // C → D
```
#### **Problem:**
- You **don’t need `tmp`** because `B.next` is **already D**.  
- If you overwrite `B.next` **before** setting `C.next`, you **lose the reference to D** unless saved.  

#### **Fixed Version:**
```plaintext
C.next = B.next  // C → D (save D first!)
B.next = C       // B → C
```
✅ **Correct order:**  
1. First link `C.next` to `D` (using `B.next` before it’s overwritten).  
2. Then update `B.next` to `C`.  

#### **Why Your Version Works (But Is Risky):**
- Your `tmp` saves `D`, so no data is lost, but it’s **unnecessary** (extra variable).  
- If you **omit `tmp` and swap lines 2 & 3**, you’d lose `D` forever:  
  ```plaintext
  B.next = C  // B → C (but D is now unreachable!)
  C.next = D  // Too late—B.next was already overwritten.
  ```

---

### **2. Doubly Linked List Check**
#### **Your Code:**
```plaintext
C.next = D  // C → D
B.next = C  // B → C
D.prev = C  // D ← C
C.prev = B  // B ← C
```
✅ **Perfect!** No references are lost.  
✅ **Order doesn’t matter** as much here because:  
   - You’re not overwriting critical pointers before using them.  
   - All four links are updated correctly.  

#### **Alternative Order (Also Valid):**
```plaintext
C.prev = B  // B ← C
C.next = D  // C → D
B.next = C  // B → C
D.prev = C  // D ← C
```

---

### **Key Takeaways**
| List Type       | Correct Order                                  | Pitfall to Avoid                          |
|----------------|---------------------------------------------|------------------------------------------|
| **Singly Linked** | 1. `C.next = B.next`<br>2. `B.next = C`       | Overwriting `B.next` before saving `D`.   |
| **Doubly Linked** | Any order (all 4 links updated independently) | Forgetting to update either `prev` or `next`. |

### **Final Answer**
- **Singly linked list:** You didn’t lose references (thanks to `tmp`), but it’s cleaner **without `tmp`** by swapping the order.  
- **Doubly linked list:** Flawless—all pointers are correctly updated.  

Would you like to see a memory diagram for clarity?

### **Memory Diagrams: Inserting "C" Between "B" and "D"**

#### **Initial State (Before Insertion)**
**Singly Linked List:**  
`A → B → D → F`  

**Doubly Linked List:**  
`A ⇄ B ⇄ D ⇄ F`  

---

### **1. Singly Linked List Insertion**
#### **Step-by-Step with Corrections**
**(Problem in Your Original Approach)**  
Your code used `tmp`, but it’s unnecessary if we **set `C.next` first**:

```plaintext
C.next = B.next  // C → D (saves D before B.next is overwritten)
B.next = C       // B → C
```

#### **Diagram:**
1. **Before Insertion:**  
   ```
   B.next = D
   ```
2. **After `C.next = B.next`:**  
   ```
   C.next = D
   B.next = D (unchanged)
   ```
3. **After `B.next = C`:**  
   ```
   B.next = C → D
   ```
✅ **Final List:** `A → B → C → D → F`  

#### **What If You Did It Wrong?**
If you wrote:  
```plaintext
B.next = C    // B → C (but D is lost!)
C.next = D    // C → D (recovered, but risky)
```
You’d temporarily **lose access to `D`** between steps 1 and 2.  
🚫 **Dangling reference risk!**  

---

### **2. Doubly Linked List Insertion**
#### **Step-by-Step (Your Correct Approach)**
```plaintext
C.next = D  // C → D
B.next = C  // B → C
D.prev = C  // D ← C
C.prev = B  // B ← C
```

#### **Diagram:**
1. **Before Insertion:**  
   ```
   B.next = D
   D.prev = B
   ```
2. **After `C.next = D` and `B.next = C`:**  
   ```
   B.next = C → D
   D.prev = B (still)
   ```
3. **After `D.prev = C` and `C.prev = B`:**  
   ```
   B ⇄ C ⇄ D
   ```
✅ **Final List:** `A ⇄ B ⇄ C ⇄ D ⇄ F`  

#### **Why Order Doesn’t Matter Here?**
- Doubly linked lists **don’t lose references** because:  
  - `B.next` and `D.prev` are updated **independently**.  
  - No pointer is overwritten before being read.  

---

### **Side-by-Side Comparison**
| Step               | Singly Linked List (Fixed)       | Doubly Linked List (Your Code) |
|--------------------|----------------------------------|--------------------------------|
| **1. Save Critical Pointer** | `C.next = B.next` (saves D) | Not needed (both links stored) |
| **2. Update Predecessor** | `B.next = C` | `B.next = C`, `C.prev = B` |
| **3. Update Successor** | — | `D.prev = C`, `C.next = D` |
| **Risk of Lost Data** | High (if done wrong) | None |

---

### **Key Lessons**
1. **Singly Linked List:**  
   - Always **save the forward pointer (`B.next`)** before overwriting it.  
   - Your `tmp` worked but was redundant—better to set `C.next` first.  

2. **Doubly Linked List:**  
   - Your code was perfect because all pointers are updated **atomically**.  
   - No risk of losing `D` because `D.prev` and `B.next` are separate.  
