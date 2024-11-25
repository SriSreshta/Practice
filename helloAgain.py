# -*- coding: utf-8 -*-
"""
Created on Tue Oct  8 00:38:35 2024

@author: srisr
"""
#this is a single line comments
print("hello world")
n = int(input("Enter no.: "))
print("n+3 is :",n+3)
print(type(n))
"""this is a ulti
multi line comment"""
def add():
        x = 3
        print("the local variable x is :",x)
        print("the global variable n is : ",n)
add()
