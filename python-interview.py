import random

from numpy import number


def index():
    print("hello world!!, here is my answer of interview question:")
    newString = input("Please enter your String:")
    newFloat = input("please enter your Float Number:")
    floatCovert = float(newFloat)
    print(f"The string and float are:{newString}, {floatCovert}")

    name = input("please enter your name:")
    print(f"Hello my name is {name}")

    anotherString = input("Please enter a String:")
    newChar = ""

    if(len(anotherString) < 3):
        print("The String length is not enough")
    else:
        for char in range(0, 3):
            newChar += anotherString[char]
    print(newChar)

    print(f"THe calculate result is: {((1 + 5)*7)+6}")
    thirdString = input("enter a new String: ")
    stringLen = len(thirdString)

    print(f"The length of string you just enter is :{stringLen}")

    lenghOflist = int(input("please enter the lengh of the number list:"))

    numberList = []

    for i in range(lenghOflist):
        random_integer = int(random.random()*100)
        numberList.append(random_integer)

    print("here is the reversed Number List:" + numberList)

    endTest = False

    numberResult = []

    while not endTest:
        testNumber = int(input("please enter your number :"))
        for i in numberList:
            if testNumber > i:
                numberResult.append(i)

        if len(numberResult) == 0:
            print('there are no number less than your number')
        else:
            print(
                f"here is the number that less than your enter: {numberResult}")

        response = input("Press y to continue, press n to stop:")

        if response == "y":
            endTest = False
            numberResult = []
        else:
            endTest = True


index()
