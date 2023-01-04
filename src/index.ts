/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role; */

/*2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

// type Person = { 
//   id: string,
// 	name: string, 
// 	email: string,
//   password: string,
//   role: "Admin" | "Normal"
// };

// const userOne:Person = {
//   id: "01",
//   name: "Astrodev",
// 	 email: "astro@bigmail",
//   password: "123",
//   role: "Admin"
// }

// const userTwo:Person = {
//   id: "02",
//   name: "Dev",
// 	email: "dev@bigmail",
//   password: "234",
//   role: "Normal"
// }

// console.table(userTwo)
// console.table(userOne)
// console.table([userOne,userTwo])

type AdminAccount = {
  account: string | number,
  permission: boolean
}

type NormalAccount = {
  account: string | number,
  permission: boolean
}


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;*/

type Person = { 
  id: string,
	name: string, 
	email: string,
  password: string,
  role: "Admin" | "Normal"
};

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

const userOne:Person = {
  id: "01",
  name: "Astrodev",
	email: "astro@bigmail",
  password: "123",
  role: Role.ADMIN
}

const userTwo:Person = {
  id: "02",
  name: "Dev",
	email: "dev@bigmail",
  password: "234",
  role: Role.NORMAL
}

console.table([userOne,userTwo])

/*2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);*/

type AdminUser =Person & AdminAccount

const userTree:AdminUser = {
  id: "03",
  name: "Vic",
	email: "vic@bigmail",
  password: "345",
  role: Role.ADMIN,
  account: "admin1",
  permission: true
}

type NormalUser =Person & NormalAccount // intersection

const userFour:NormalUser = {
  id: "04",
  name: "Gui",
	email: "gui@bigmail",
  password: "456",
  role: Role.NORMAL,
  account: "normal1",
  permission: false
}


/*
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;*/

const arrayUsers:AdminUser[] | NormalUser[] = [] //union




/*
4. Crie duas pessoas, uma com permissão normal e a outra admin;*/

//userTree e userFour ja criado acima^^^^


/*
5. Guarde essas pessoas no array de usuários.^
*/ 

arrayUsers.push(userTree)
arrayUsers.push(userFour)

console.table(arrayUsers)