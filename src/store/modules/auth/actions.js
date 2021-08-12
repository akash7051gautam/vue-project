export default{
    async login(context, payload){
        const response = await fetch('http:localhost:8000/api/v1/login',{
            method: 'POST',
            body:JSON.stringify({
                email:payload.email,
                password:payload.password
            })
        });
        
        const responseData = await response.json();

        if( !response.ok ){
            console.log(responseData);
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }
        console.log(responseData);
        context.commit('setUser',{
            token: responseData.responseData.token
        })
    }
}