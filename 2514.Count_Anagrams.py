from collections import Counter
from itertools import permutations, combinations, product
from math import factorial


class Solution:
  def countAnagrams(s: str) -> int:
    for each in s.split():
      a = Counter(each)
      lenght = factorial(len(each))

    for k,v in a.items():
      lenght=lenght//factorial(v)
    res=(res*lenght)
  print(countAnagrams("too hot"))