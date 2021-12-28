# Python Unit testing

## Beyond Unit Tess

* [PyCon 2018: Beyond Unit Tests](https://hillelwayne.com/talks/beyond-unit-tests/)
  * [GitHub dpcontracts](https://github.com/deadpixi/contracts)

  `dpcontracts` Sample:

  ```python
  @require("l must not be empt "),
  lambda args: len(arg.1) >0)
  def tail(l: List[Any]) -> List[Any]:

    output = l[1:]
    assert [l[0]] + output == l
    return output
  ```

  ```python
  @require("l must not be empt "),
  @ensure("result is tail of list",
  lambda a, r: [a.l[0]] + r == a.l)
  lambda args: len(arg.1) >0)
  def tail(l: List[Any]) -> List[Any]:
    return l[1:]
  ```

## Mocking

* [python doc `unittest.mock`](https://docs.python.org/3/library/unittest.mock.html)
* [An introduction to mocking in python](https://www.toptal.com/python/an-introduction-to-mocking-in-python)

## Boilerplate

* [python 3 + argparse + unittest](https://www.python-boilerplate.com/py3+argparse+unittest)

## References

* [2018: ](https://www.bogotobogo.com/python/python_private_attributes_methods.php)
* [2016: Write Professional Unit Tests in Python](https://code.tutsplus.com/tutorials/write-professional-unit-tests-in-python--cms-25835)
* [PyCon 2018: Demystifying the patch funcction](https://www.youtube.com/watch?v=ww1UsGZV8fQ)
* [PyCon 2018: Type-checked Python in the real world](https://www.youtube.com/watch?v=pMgmKJyWKn8)
* [PyCon 2018: Automatic Code Quality](https://www.youtube.com/watch?v=G1lDk_WKXvY)

