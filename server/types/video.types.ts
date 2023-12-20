export type videoTypes={
    v_title:string
    v_categ:string
    v_desc?:string
    v_url:string
    v_cover:string
    v_duration:string
    allow_comments?:boolean
    c_id:string
}

export type videoMutate={
    v_title?:string
    v_categ?:string
    v_desc?:string
    v_url?:string
    v_duration?:string
    allow_comments?:boolean
}