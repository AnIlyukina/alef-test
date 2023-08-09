export interface User {
  name: string;
  age: string;
  children: Child[];
}

export interface Child {
  name: string;
  age: string;
}
