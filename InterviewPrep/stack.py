class Stack:
    def __init__(self):
        self.items = []

    def push(self, value):
        """Adds an item to the top of the stack."""
        self.items.append(value)

    def pop(self):
        """Removes and returns the item from the top of the stack."""
        if not self.is_empty():
            return self.items.pop()
        return None

    def peek(self):
        """Returns the item from the top of the stack without removing it."""
        if not self.is_empty():
            return self.items[-1]
        return None

    def is_empty(self):
        """Checks if the stack is empty."""
        return len(self.items) == 0
