function limitInRange(min: number, max: number, value: number): number {
  switch (true) {
    case value < min:
      return min;
    case value > max:
      return max;
    default:
      return value;
  }
}

export { limitInRange }
