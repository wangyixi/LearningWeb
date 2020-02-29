let oFetch = new FetchData;
oFetchGet.get('http://jsonplacehoder.typicode.com/posts')
	.then(data=>console.log(data))
	.catch(err=>console.log(err));
	
const user = {
	"name": "leo",
	"email": "leo@gmail.com"
};
oFetch.post('http://jsonplacehoder.typicode.com/posts/users', user)
	.then(data=>console.log(data))
	.catch(err=>console.log(err));