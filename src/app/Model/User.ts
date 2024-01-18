export class User {
    id = 0;
    name = '';
    firstname = '';
    birthDate: Date;
    cin = 0;

    constructor(id: number, name: string, firstname: string, birthDate: Date, cin: number) {
        this.id = id;
        this.name = name;
        this.firstname = firstname;
        this.birthDate = birthDate;
        this.cin = cin;

    }
}
