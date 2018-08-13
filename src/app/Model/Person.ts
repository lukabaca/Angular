export class Person {
    private _id: number;
    private _name: string;
    private _surname: string;
    private _gender: string;


  constructor(id: number, name: string, surname: string, gender: string) {
        this._id = id;
        this._name = name;
        this._surname = surname;
        this._gender = gender;
    }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }

}

