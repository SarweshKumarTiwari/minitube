interface videoTypes{
    videoId?:string
    v_title:string
    v_desc?:string
    publised_time?:string
    channel:{
        _id:string
        c_name:string
    }
    v_cover:string
    v_categ?:string
}

export default videoTypes;