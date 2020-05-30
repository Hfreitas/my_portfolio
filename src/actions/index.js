export const CLICK = 'CLICK';
export const INPUT_1 = 'INPUT_1';
export const INPUT_2 = 'INPUT_2';
export const INPUT_3 = 'INPUT_3';

export const clickAction = () => ({
  type: CLICK,
});

export const inputOneAction = (value) => ({
  type: INPUT_1,
  value,
});

export const inputTwoAction = (value) => ({
  type: INPUT_2,
  value,
});

export const inputThreeAction = (value) => ({
  type: INPUT_3,
  value,
});
