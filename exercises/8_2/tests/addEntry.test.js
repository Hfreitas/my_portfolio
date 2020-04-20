const addEntryTest = require('../src/exercise8-2');

describe('O objeto testado', () => {
  const testAddKey = addEntryTest.addEntry();

  const testLesson2 = addEntryTest.lesson2;

  test('tem o valor ', () => {
    expect(
      testAddKey(testLesson2, 'turno', 'manhã').toEqual({
        materia: 'História',
        numeroEstudantes: 20,
        professor: 'Carlos',
        turno: 'manhã',
      }),
    );
  });
});
