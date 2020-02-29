class FetchData{
	get(url){
		return new Promise(function(resolve, reject){
			fetch(url)
				.then(res=>res.json())
				.then(data=>resolve(data))
				.catch(err=>reject(err));
		});
	};
	
	post(url, data){
		return new Promise(function(resolve, reject){
			fetch(url, {
				method: 'POST',
				headers: {
					'Conten-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res=>res.json())
				.then(data=>resolve(data))
				.catch(err=>reject(err));
		});
	};
	
	put(url, data){
		return new Promise(function(resolve, reject){
			fetch(url, {
				method: 'PUT',
				headers: {
					'Conten-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
				.then(res=>res.json())
				.then(data=>resolve(data))
				.catch(err=>reject(err));
		});
	};
	
	delete(url){
		return new Promise(function(resolve, reject){
			fetch(url, {
				method: 'DELETE',
				headers: {
					'Conten-Type': 'application/json'
				}
			})
				.then(res=>res.json())
				.then(()=>resolve('delete'))
				.catch(err=>reject(err));
		});
	};
}
