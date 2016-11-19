
export class LevelTools {

  constructor(){

  }

  static getColor(levelColor){
    let classColor:string;
    switch (levelColor) {
      case '0':
        classColor = '#4caf50'; // green lighten
        break;
      case '1':
        classColor = '#ffa726'; // orange lighten
        break;
      case '2':
        classColor = '#ff7043'; // deep orange lighten
        break;
      case '3':
        classColor = '#f44336'; // red lighten
        break;
      default:'0'
    }
    return classColor;
  }

  static getTXT(levelColor){
    let classColor:string;
    switch (levelColor) {
      case '0':
        classColor = 'Acceptable';
        break;
      case '1':
        classColor = 'rappots contradictoires';
        break;
      case '2':
        classColor = 'à risque';
        break;
      case '3':
        classColor = 'à éviter';
        break;
      default:'0'
    }
    return classColor;
  }
}
