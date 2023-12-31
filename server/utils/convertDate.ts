export default function dateConverter(time:number|string=0){
    return Math.floor(Date.now()/1000)+Number(time);
}