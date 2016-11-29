
export class LevelTools {

  constructor(){

  }

  static getColor(levelColor:string):string{
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

  static getTXT(levelColor:string):string{
    let txt:string;
    switch (levelColor) {
      case '0':
        txt = 'Acceptable';
        break;
      case '1':
        txt = 'rapports contradictoires';
        break;
      case '2':
        txt = 'à risque';
        break;
      case '3':
        txt = 'à éviter';
        break;
      default:'0'
    }
    return txt.toUpperCase();
  }
}
