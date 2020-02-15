let peças = 'ROOK';
switch (peças.toLowerCase()) {
  case 'pawn':
    console.log('foward one square');
    break;
  case 'knight':
    console.log('one square foward or backward, one square diagonally');
    break;
  case 'king':
    console.log('one square, any direction');
    break;
  case 'queen':
    console.log('any numbers of vacant squares in any direction');
    break;
  case 'bishop':
    console.log('any number of  vacant squares in any direction, diagonally');
    break;
  case 'rook':
    console.log(
      'any number of vacant squares in any direction, on straight line'
    );
    break;
  default:
    console.log('error');
}
