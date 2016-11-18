
export class LevelTools {

  constructor(){

  }

  static getColor(levelColor){
    let classColor:string;
    switch (levelColor) {
      case '0':
        classColor = '#4caf50';
        break;
      case '1':
        classColor = 'green';
        break;
      case '2':
        classColor = 'orange';
        break;
      case '3':
        classColor = '#f44336';
        break;
      default:'0'
    }
    return classColor;
  }

  static getTXT(levelColor){
    let classColor:string;
    switch (levelColor) {
      case '0':
        classColor = 'Pas de danger';
        break;
      case '1':
        classColor = 'green';
        break;
      case '2':
        classColor = 'orange';
        break;
      case '3':
        classColor = 'à évité';
        break;
      default:'0'
    }
    return classColor;
  }
}
