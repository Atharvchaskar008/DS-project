class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        """Adds a new node containing data to the end of the linked list."""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def get_all(self):
        """Traverses the linked list and returns all elements in a Python list."""
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result
