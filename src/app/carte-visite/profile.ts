export class Profile {
  firstName: string = '';
  lastName: string = '';
  image: string = '';
  job: string = 'r';
  quote: string = '';
  jobDescription: string = '';
  Keywords: string = '';
  constructor() {
    this.firstName = 'Mohamed';
    this.lastName = 'Bouarada';
    this.image = 'mohamed.jpg';
    this.job = 'Software engineer';
    this.quote = `"Lamborghini Mercy Your chick she so thirsty I'm in that two seat Lambo"`;
    this.jobDescription =
      "etudiant en 2ème année cycle d'ingénieur en génie logiciel à l insat";
    this.Keywords = 'HTML , CSS , Angularjs ,JS ,PHP';
  }
}
