export class User {
    constructor(public email: string, public name: string, private password: string){}

    matches(another: User): boolean {
        return another !==undefined && another.email === this.email && another.password == this.password
    }
}

export const users = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana 23'),
    "marina@gmail.com": new User('marina@gmail.com', 'Marina', 'marina 23')
}