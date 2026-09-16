class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, value):
        """Adds an item to the back of the queue."""
        self.items.append(value)

    def dequeue(self):
        """Removes and returns the item from the front of the queue."""
        if not self.is_empty():
            return self.items.pop(0)
        return None

    def is_empty(self):
        """Checks if the queue is empty."""
        return len(self.items) == 0

    def size(self):
        """Returns the number of items in the queue."""
        return len(self.items)
