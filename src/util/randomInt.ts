/** 임의의 수 반환하기 : 0 또는 1 */
function get_1_or_0(): number {
  const ms = new Date().getMilliseconds() * 0.01;
  const rand = Math.floor(ms);

  return rand % 2;
}

/** 임의의 수 반환하기 : 0 ~ 입력값(get_1_or_0의 반환값) 사의 정수 */
function get_random(n = get_1_or_0() + 1): number {
  if (Number.isNaN(n)) {
    throw new Error("입력값이 숫자가 아닙니다.");
  } else if (n < 0) {
    throw new Error("입력값이 양수가 아닙니다.");
  }

  const ms = new Date().getMilliseconds() * 0.01;
  const rand = Math.floor(ms * n * 0.1);

  return rand;
}

export { get_1_or_0, get_random };
