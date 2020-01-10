export default{
    //时间戳2019-12-31 16:39:1
    formateDate(time){
        if(!time) return '';
        let date = new Date(time);
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }
}