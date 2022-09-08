export default function Api(){
    const API_POINT = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev';
    this.get = async (data) => {
        try{
            const res = await fetch(`${API_POINT}${data ? data : ''}`);
            if(res.ok){
                const json = await res.json();
                return json;
            }
        }catch(error){
            throw new Error(error.message);
        }    
    }
}
