(function () {
  const users = fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let newArr = [];
      newArr = data.map((user) => {
        console.log(user.title + " Sarah");
        return (user.title = " Sarah is best dev ever");
      });
      return newArr;
    })
    .then((newList) => {
      console.log(newList);
    });
})();
