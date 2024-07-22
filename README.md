In this checkpoint,we are going to consume an API that provides us with list of users. Just follow the instructions:


Instructions with short explication of the solution :

1- Create a project using create-react-app. -> "npx create-react-app checkpointapi"
2- Create UserList.js file in src folder -> "src>components>UserList.jsx"
3- Install axios. -> "npm i axios"
4- You gone to use jsonplaceholder API to get list of user -> "from : https://jsonplaceholder.typicode.com/users "
5- Use axios to Get data from Link inside useEffect hooks -> " axios.get('Url') .then(...) .catch(...)"
6- Use UseState hooks to save data into listOfUSer state  -> "const [listOfUser, setListOfUser] = useState([]); -> .then((res) => {setListOfUser(res.data);})
7- Map listOfUser to display list of user into screen  -> " {listOfUser.map((user) => (... {user.name} ..))}
8- Style your App as you wish

Output :
![api](https://github.com/user-attachments/assets/c74bf349-5040-46b7-92a8-52b79284d596)
