/** 임의의 수 반환하기 : 0 또는 1 */
function get_1_or_0(): number {
  const rand = Math.floor(Math.random() * 2);

  return rand;
}

/** 임의의 수 반환하기 : 0 ~ 입력값(get_1_or_0의 반환값) 사의 정수 */
function get_random(n: number): number {
  if (Number.isNaN(n)) {
    throw new Error("입력값이 숫자가 아닙니다.");
  } else if (n < 0) {
    throw new Error("입력값이 양수가 아닙니다.");
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result += get_1_or_0();
  }

  return result;
}

export { get_1_or_0, get_random };
