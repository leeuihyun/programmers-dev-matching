export default function Api() {
    const API_POINT =
        "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/";
    this.getApi = async (data) => {
        try {
            const res = await fetch(`${API_POINT}${data ? data : ""}`);
            if (!res.ok) {
                throw new Error("server error");
            }
            const json = await res.json();
            console.log(json);
            return json;
        } catch (error) {
            throw new Error(error.message);
        }
    };
}
