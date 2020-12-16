import fetch from "../api/fetch"
export default {
    getarticle(params) {
        return fetch.get("http://www.demo.test/api.php/portal/getarticles/getarticle", params);
    }
}