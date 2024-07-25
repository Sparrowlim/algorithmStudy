데이터를 그룹화하는 자료구조의 종류 중 하나로 인덱스를 통해 데이터에 접근한다.

Javascript에서 배열을 어떻게 다루는지 알아보자.

# 배열 선언

```js
const arr = [0, 0, 0, 0, 0, 0]; // [0, 0, 0, 0, 0, 0]

const arr2 = new Array(6); // [undefined, undefined, undefined, undefined, undefined, undefined]

const arr3 = [...new Array(6)].map((_) => 0); // [0, 0, 0, 0, 0, 0]
https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr
const arr4 = new Array(6).fill(0); // [0, 0, 0, 0, 0, 0]
```

p96 사진 하나

# 배열과 차원

배열은 차원과 무관하게 메모리에 연속으로 할당됩니다.

## 1 차원 배열

p97 사진 하나

왼쪽이 1차원 배열을 추상화한 것이고 오른쪽이 실제 메모리에 배열이 할당된 모습이다.

## 2 차원 배열

p98 사진 하나

1차원 배열을 확장한 것이다. 2차원 배열의 행, 열은 추상적인 구조일 뿐 실제 메모리에서는 순차적으로 1차원 공간에 저장한다.

```js
const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(arr[1][2]); // 7
arr[1][2] = 77;
console.log(arr[1][2]); // 77

// 다음처럼 fill 메소드와 spread operator를 이용해서 2차원 배열을 구현할 수 있다.
const arr2 = [...new Array(3)].map((_, i) => new Array(3).fill(i));
// arr2: [[0, 0, 0], [1, 1, 1], [2, 2, 2]]
```

# 배열의 효율성

## 데이터에 접근

"임의 접근" 이라는 방법으로 배열의 모든 위치에 잇는 데이터에 한번에 접근할 수 있다.

```js
const arr = [1,2,3,4];
arr[1] // 2
```

데이터의 개수와 상관없이 상수 ( `O(1)` )

## 데이터 추가

### 맨 뒤에 삽입

p99 사진 추가

그림처럼 데이터를 삽입해도 다른 데이터 위치에 영향을 주지 않는다.

데이터의 개수와 상관없이 상수 ( `O(1)` )

### 중간에 삽입

p100 사진 추가

뒤에 있는 데이터의 개수만큼 미는 연산을 해야 한다. (ex N-a개 ( N은 데이터의 개수 a는 N보다 작은 양의 정수 ))

데이터의 개수에 비례하게 시간 복잡도가 올라간다. ( `O(N)` )

### 맨 앞에 삽입

p100 사진 추가

기존의 데이터를 한 칸씩 밀어야 한다.

데이터의 개수에 비례하게 시간 복잡도가 올라간다. ( `O(N)` )

# 배열을 선택할 때 고려할 점

1. 할당할 수 있는 메모리 크기를 확인해야 한다. 보통 1차원 배열은 1000만, 2차원 배열은 `3000 * 3000`을 최대로 생각한다.
2. 중간에 데이터 삽입이 많은지 확인해야 한다. 중간이나 맨 앞에 데이터를 빈번하게 삽입하면 시간 복잡도가 높아진다. ( 둘다 `O(N)`)

# 실제 사용 예시

## 데이터 추가

```js
// Description: 배열에 요소를 추가하는 방법을 정리한다.
// Link: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Arrayss
// Reference: https://poiemaweb.com/js-array
// Object: javascript

// 배열의 뒤에 요소를 추가
const arr1 = [1, 2, 3];
// push(추가할 요소)
arr1.push(4); // [1, 2, 3, 4]

const arr2 = [1, 2, 3];
// concat(추가할 요소)
arr2.concat([4, 5]); // [1, 2, 3, 4, 5]

// 배열의 앞에 요소를 추가
const arr3 = [1, 2, 3];
// unshift(추가할 요소)
arr3.unshift(0); // [0, 1, 2, 3]

// 배열의 앞이나 뒤에 요소를 추가
const arr4 = [1, 2, 3];
// ...은 전개 연산자로 배열을 펼쳐준다.
arr4 = [...arr4, 4]; // [1, 2, 3, 4]

// 배열의 중간에 요소를 추가
const arr5 = [1, 2, 3];
// splice(시작 인덱스, 제거할 요소 개수, 추가할 요소)
arr5.splice(1, 0, 1.5); // [1, 1.5, 2, 3]
```

> 데이터의 개수가 15,000개 정도라면 JS엔진에서 맨 앞에 데이터를 넣더라도 최적화하여 더 적은 시간 복잡도를 가진다고 한다.

## 데이터 삭제

```js
// Description: 배열에서 데이터를 삭제하는 방법을 정리한다.
// Link: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Arrayss
// Reference: https://poiemaweb.com/js-array
// Object: javascript

// 배열에서 데이터를 삭제하는 방법

// 배열의 마지막 요소를 제거하려면 pop 메서드를 사용한다.
const arr1 = [1, 2, 3];
const result1 = arr1.pop(); // 마지막 요소를 제거하고 반환
console.log(arr1); // [1, 2]

// 배열의 첫 번째 요소를 제거하려면 shift 메서드를 사용한다.
const arr2 = [1, 2, 3];
const result2 = arr2.shift(); // 첫 번째 요소를 제거하고 반환
console.log(arr2); // [2, 3]

// 배열의 특정 위치의 요소를 제거하려면 splice 메서드를 사용한다.
const arr3 = [1, 2, 3];
const result3 = arr3.splice(1, 1); // 1번 인덱스부터 1개의 요소를 제거
console.log(arr3); // [1, 3]
```

> 데이터의 개수가 15,000개 정도라면 JS엔진에서 맨 앞에 데이터를 삭제하더라도 최적화하여 더 적은 시간 복잡도를 가진다고 한다.

## 특정 연산 적용 (고차함수 이용)

```js
// Description: 고차함수를 이용해서 배열에 특정 연산을 적용한다.
// Link: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Arrayss
// Reference: https://poiemaweb.com/js-array
// Object: javascript

// 배열의 각 요소에 대해 특정 연산을 적용하는 고차함수
// map, filter, reduce

// 배열의 각 요소에 대해 특정 연산을 적용한 결과를 반환하는 고차함수
const arr1 = [1, 2, 3, 4];
// 배열의 각 요소를 제곱한 새로운 배열을 반환한다.
const squares = arr1.map((x) => x * x); // [1, 4, 9, 16]

// 배열의 요소 중 특정 조건을 만족하는 요소만으로 구성된 배열을 반환하는 고차함수
const arr2 = [1, 2, 3, 4];
// 배열의 요소 중 짝수인 요소만으로 구성된 배열을 반환한다.
const evens = arr2.filter((x) => x % 2 === 0); // [2, 4]

// 배열의 각 요소에 대해 특정 연산을 적용한 결과를 누적하는 고차함수
const arr3 = [1, 2, 3, 4];
// 초기값 0을 주지 않으면 배열의 첫 번째 요소가 초기값이 된다.
const sum = arr3.reduce((x, y) => x + y, 0); // 10
```

## 문제

### 배열 정렬

sort()은 문자열 정렬을 실행하는데 안에 -가 나오는 식을 넣으면 그대로 정렬을 확정, +면 둘이 바꾸는 식으로 작동한다.

```tsx
arr.sort((a,b)=> a-b) // 리턴값이 -이면 a,b,c,d ... 그대로 정렬
```

내부적으로 자바스크립트의 sort는 O(NlogN)의 시간 복잡도를 갖는다.

### 배열 중복 해제 후 정렬

```tsx
function solution(arr) {
  const setArr = [...new Set(arr)];
  return setArr.sort((a, b) => b - a);
}

solution([2, 3, 1, 1, 2, 2, 3, 5, 6]);
```

set은 중복을 없앨 수 있는 "집합"입니다. set은 해시 알고리즘을 이용해서 O(N)으로 중복값을 없앨 수 있습니다.

