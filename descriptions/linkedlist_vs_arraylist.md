# When to use linked list vs array list

### **When to Use a Linked List vs. ArrayList/Array**  

The choice depends on **operation efficiency**, **memory usage**, and **access patterns**. Here’s a breakdown:

| **Scenario**               | **Linked List** (Singly/Doubly) | **ArrayList/Dynamic Array** |
|----------------------------|-------------------------------|---------------------------|
| **Frequent Insertions/Deletions at Head** | ✅ **O(1)** (Just update `head`) | ❌ **O(n)** (Shifting required) |
| **Frequent Insertions/Deletions in Middle** | ✅ **O(1)** (If node is known)<br>❌ **O(n)** (If traversal needed) | ❌ **O(n)** (Shifting elements) |
| **Random Access (by Index)** | ❌ **O(n)** (Must traverse) | ✅ **O(1)** (Direct indexing) |
| **Memory Overhead** | ❌ Higher (Stores `next`/`prev` pointers) | ✅ Lower (Just data, contiguous) |
| **Cache Performance** | ❌ Poor (Nodes scattered in memory) | ✅ Excellent (Locality of reference) |
| **Dynamic Resizing** | ✅ No resizing needed (Grows per node) | ❌ **O(n)** copy on resize (but amortized O(1) |
| **Use Cases** | - Stacks/Queues<br>- Browser history (doubly)<br>- Undo/Redo (doubly) | - Random-access-heavy tasks<br>- Dynamic arrays (Python `list`, Java `ArrayList`) |

---

### **When to Prefer a Linked List?**
1. **Frequent Insertions/Deletions at Ends**  
   - Example: **Queue** (FIFO) with `O(1)` enqueue/dequeue.  
   - Better than `ArrayList`, which requires shifting.  

2. **Unknown or Dynamic Size**  
   - No resizing penalty (unlike `ArrayList`, which doubles capacity).  

3. **Middle Insertions with Pre-Known Node**  
   - Example: **Text editor splice operations** (if references are cached).  

4. **No Random Access Needed**  
   - Example: **Music playlist** (sequential access only).  

---

### **When to Prefer an ArrayList?**
1. **Frequent Random Access**  
   - Example: **Binary search** (`O(1)` index access vs. `O(n)` traversal).  

2. **Memory Efficiency Critical**  
   - Arrays have **no pointer overhead** (better for large datasets).  

3. **CPU Cache Optimization**  
   - Contiguous memory = **fewer cache misses** (faster iteration).  

4. **Append-Heavy Workloads**  
   - `ArrayList` has **amortized O(1)** append (despite occasional resize).  

---

### **Real-World Examples**
- **Linked List**  
  - **Undo/Redo** (Doubly linked list, e.g., Photoshop).  
  - **LRU Cache** (Doubly linked list + hash map).  
  - **Thread Scheduling** (OS uses singly linked for task queues).  

- **ArrayList**  
  - **Database Tables** (Random access by index).  
  - **Image Pixels** (Contiguous memory = faster processing).  
  - **Gaming Engines** (Storing entities for fast iteration).  

---

### **TL;DR: Key Tradeoffs**
- **Use Linked Lists for:**  
  - Frequent inserts/deletes (especially at ends/middle).  
  - No random access needed.  
- **Use ArrayLists for:**  
  - Fast indexing/random access.  
  - Better memory locality (performance-critical apps).  

**Need a hybrid?** Some languages offer **deques** (e.g., Python `collections.deque`), which combine linked-list-like O(1) ops with cache-friendly blocks.