

# **5-1 배열 개념**

## 배열은 언제 쓸까

같은 타입의 변수가 여러 개 필요한 경우 사용합니다.

## 배열은 어떻게 생겼을까

배열은 차원과 무관하게 메모리에 연속 할당됩니다.

| arr[0][0] |
| --- |
| arr[0][1] |
| arr[0][2] |
| arr[1][0] |
| arr[1][1] |
| arr[1][2] |

---

# 5-2 배열 효율성

## 배열 연산의 시간 복잡도는 어떨까

특정 데이터 접근: O(1) → 데이터에 자주 접근하거나 읽는 경우 좋아요

삽입, 추가, 삭제: O(N) → 이런 작업이 많아지면 시간 복잡도 증가 고려,

## 할당 가능한 메모리 크기는 어느 정도일까

1차원 배열: 정수형 1000만개

2차원 배열은 3000*3000

---

# 5-3 자주 활용하는 배열 기법

- 데이터 추가
    1. `push()`
        - 배열의 끝에 하나 이상의 요소를 추가합니다.
        - 시간 복잡도: O(1)
        
        ```jsx
        const arr = [1, 2, 3];
        arr.push(4);
        console.log(arr);
        // 출력: [1, 2, 3, 4]
        
        ```
        
    2. `unshift()`
        - 배열의 시작에 하나 이상의 요소를 추가합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3];
        arr.unshift(0);
        console.log(arr);
        // 출력: [0, 1, 2, 3]
        
        ```
        
    3. 스프레드 연산자 (`...`)
        - 배열의 요소를 확장하여 새로운 배열을 만듭니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const combined = [...arr1, ...arr2];
        console.log(combined);
        // 출력: [1, 2, 3, 4]
        
        ```
        
    
- 데이터 삭제
    1. `pop()`
        - 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.
        - 시간 복잡도: O(1)
        
        ```jsx
        const arr = [1, 2, 3];
        const lastElement = arr.pop();
        console.log(arr);
        // 출력: [1, 2]
        console.log(lastElement);
        // 출력: 3
        
        ```
        
    2. `shift()`
        - 배열의 첫 번째 요소를 제거하고 그 요소를 반환합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3];
        const firstElement = arr.shift();
        console.log(arr);
        // 출력: [2, 3]
        console.log(firstElement);
        // 출력: 1
        
        ```
        
    3. `splice()`
        - 배열의 요소를 추가, 제거 또는 교체합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        arr.splice(1, 2, 'a', 'b');
        console.log(arr);
        // 출력: [1, 'a', 'b', 4]
        
        ```
        
- 데이터 조회
    1. `includes()`
        - 배열에 특정 요소가 포함되어 있는지 확인합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const hasThree = arr.includes(3);
        console.log(hasThree);
        // 출력: true
        
        ```
        
    2. `find()`
        - 조건을 만족하는 첫 번째 요소를 반환합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const found = arr.find(num => num > 2);
        console.log(found);
        // 출력: 3
        
        ```
        
    3. `findIndex()`
        - 조건을 만족하는 첫 번째 요소의 인덱스를 반환합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const index = arr.findIndex(num => num > 2);
        console.log(index);
        // 출력: 2
        
        ```
        
- 데이터 정렬
    1. `sort()`
    - 배열의 요소를 정렬합니다.
    - 기본적으로 문자열로 변환된 각 요소 순서대로 정렬합니다.
    - 시간 복잡도: O(n log n)
    
    ```jsx
    const arr = [4, 2, 3, 1];
    arr.sort();
    console.log(arr);
    // 출력: [1, 2, 3, 4]
    
    ```
    
    - 사용자 정의 비교 함수를 사용하여 정렬할 수 있습니다.
    - 비교 함수가 음수를 반환하면 a가 b보다 앞에, 0을 반환하면 순서가 동일, 양수를 반환하면 a가 b보다 뒤에 위치합니다.
    
    ```jsx
    const arr = [4, 2, 3, 1];
    arr.sort((a, b) => a - b); // 오름차순 정렬
    console.log(arr);
    // 출력: [1, 2, 3, 4]
    
    arr.sort((a, b) => b - a); // 내림차순 정렬
    console.log(arr);
    // 출력: [4, 3, 2, 1]
    
    ```
    
- 기타 고차 함수
    1. `forEach()`
        - 배열의 각 요소에 대해 주어진 함수를 실행합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3];
        arr.forEach(num => console.log(num));
        // 출력: 1 2 3
        
        ```
        
    2. `map()`
        - 배열의 각 요소를 변형하여 새로운 배열을 만듭니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3];
        const doubled = arr.map(num => num * 2);
        console.log(doubled);
        // 출력: [2, 4, 6]
        
        ```
        
    3. `filter()`
        - 조건을 만족하는 요소들만으로 새로운 배열을 만듭니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const even = arr.filter(num => num % 2 === 0);
        console.log(even);
        // 출력: [2, 4]
        
        ```
        
    4. `reduce()`
        - 배열을 단일 값으로 줄입니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const sum = arr.reduce((acc, num) => acc + num, 0);
        console.log(sum);
        // 출력: 10
        
        ```
        
    5. `some()`
        - 배열의 일부 요소가 조건을 만족하는지 확인합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const hasEven = arr.some(num => num % 2 === 0);
        console.log(hasEven);
        // 출력: true
        
        ```
        
    6. `every()`
        - 배열의 모든 요소가 조건을 만족하는지 확인합니다.
        - 시간 복잡도: O(n)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const allEven = arr.every(num => num % 2 === 0);
        console.log(allEven);
        // 출력: false
        
        ```
        
- 기타 메소드
    1. `concat()`
        - 두 배열을 합쳐서 새로운 배열을 만듭니다.
        - 시간 복잡도: O(n + m) (n과 m은 합치는 두 배열의 길이)
        
        ```jsx
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const combined = arr1.concat(arr2);
        console.log(combined);
        // 출력: [1, 2, 3, 4]
        
        ```
        
    2. `slice()`
        - 배열의 일부를 추출하여 새로운 배열을 만듭니다.
        - 시간 복잡도: O(k) (k는 추출되는 요소의 수)
        
        ```jsx
        const arr = [1, 2, 3, 4];
        const sliced = arr.slice(1, 3);
        console.log(sliced);
        // 출력: [2, 3]
        
        ```
        

- *자바스크립트가 추가 및 삭제 메소드를 최적화 해서 조금 더 O(N)보다 성능이 더 좋다고 하네요. 근데 과연 기억할만큼 중요한 지식일까*
