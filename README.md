# Codewar-6kyu-Array.diff
6kyu Array.diff
<br><br>
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
<br>
It should remove all values from list a, which are present in list b keeping their order.
<br><br>
arrayDiff([1,2],[1]) == [2]
<br><br>
If a value is present in b, all of its occurrences must be removed from the other:
<br><br>
arrayDiff([1,2,2,2,3],[2]) == [1,3]
